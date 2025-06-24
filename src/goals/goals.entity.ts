import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Goal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  calories: number;

  @Column('int')
  protein: number;

  @Column('int')
  carbs: number;

  @Column('int')
  fat: number;
}
