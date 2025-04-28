import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}
  
  findByUsername(username: string): UserEntity | null {
    const users = this.databaseService.getAllUsers();
    return users.find(user => user.username === username) || null;
  }

  getAllUsers(): UserDto[] {
    const users = this.databaseService.getAllUsers();
    return users.map(user => this.mapToDto(user));
  }

  getUserById(id: string): UserDto | null {
    const user = this.databaseService.getUserById(id);
    return user ? this.mapToDto(user) : null;
  }

  createUser(createUserDto: UserDto): UserDto {
    const users = this.databaseService.getAllUsers();
    
    // Check if email is already in use
    const existingUserByEmail = users.find(
      u => u.email === createUserDto.email
    );
    
    if (existingUserByEmail) {
      throw new Error(`User with email ${createUserDto.email} already exists`);
    }
    
    // Check if username is already in use
    const existingUserByUsername = users.find(
      u => u.username === createUserDto.username
    );
    
    if (existingUserByUsername) {
      throw new Error(`User with username ${createUserDto.username} already exists`);
    }
    
    if (!createUserDto.password) {
      throw new Error('Password is required');
    }

    const newUser: UserEntity = {
      id: uuidv4(),
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
      weightInKg: createUserDto.weightInKg,
      heightInCm: createUserDto.heightInCm,
      dailyCalorieGoal: createUserDto.dailyCalorieGoal,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const savedUser = this.databaseService.createUser(newUser);
    return this.mapToDto(savedUser);
  }

  updateUser(id: string, updateUserDto: UserDto): UserDto | null {
    const user = this.databaseService.getUserById(id);
    if (!user) {
      return null;
    }

    const updatedUser = this.databaseService.updateUser(id, {
      ...updateUserDto,
      updatedAt: new Date().toISOString(),
    });

    return updatedUser ? this.mapToDto(updatedUser) : null;
  }

  deleteUser(id: string): boolean {
    return this.databaseService.deleteUser(id);
  }

  private mapToDto(user: UserEntity): UserDto {
    // Exclude password from returned DTO for security
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
    };
  }
}
