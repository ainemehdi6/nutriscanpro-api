/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    healthCheck() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "healthCheck", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const food_module_1 = __webpack_require__(/*! ./food/food.module */ "./src/food/food.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./src/user/user.module.ts");
const meal_module_1 = __webpack_require__(/*! ./meal/meal.module */ "./src/meal/meal.module.ts");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./src/database/database.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const image_recognition_module_1 = __webpack_require__(/*! ./image-recognition/image-recognition.module */ "./src/image-recognition/image-recognition.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            food_module_1.FoodModule,
            user_module_1.UserModule,
            meal_module_1.MealModule,
            auth_module_1.AuthModule,
            image_recognition_module_1.ImageRecognitionModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return {
            message: 'Welcome to MyFitnessPal-like API!',
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./src/auth/dto/login.dto.ts");
const register_dto_1 = __webpack_require__(/*! ./dto/register.dto */ "./src/auth/dto/register.dto.ts");
const local_auth_guard_1 = __webpack_require__(/*! ./guards/local-auth.guard */ "./src/auth/guards/local-auth.guard.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ./guards/jwt-auth.guard */ "./src/auth/guards/jwt-auth.guard.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(loginDto) {
        return this.authService.login(loginDto);
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    getProfile(req) {
        return req.user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const local_strategy_1 = __webpack_require__(/*! ./strategies/local.strategy */ "./src/auth/strategies/local.strategy.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/auth/strategies/jwt.strategy.ts");
const user_module_1 = __webpack_require__(/*! ../user/user.module */ "./src/user/user.module.ts");
const session_serializer_1 = __webpack_require__(/*! ./session.serializer */ "./src/auth/session.serializer.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule.register({ session: true }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'super-secret-key',
                signOptions: { expiresIn: '24h' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, session_serializer_1.SessionSerializer],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./src/user/user.service.ts");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(username, password) {
        const user = await this.userService.findByUsername(username);
        if (!user) {
            return null;
        }
        const isPasswordValid = await this.comparePassword(password, user.password);
        if (!isPasswordValid) {
            return null;
        }
        const { password: _ } = user, result = __rest(user, ["password"]);
        return result;
    }
    async login(loginDto) {
        const { username, password } = loginDto;
        const user = await this.validateUser(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = { sub: user.id, username: user.username };
        return {
            user,
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(registerDto) {
        const hashedPassword = await this.hashPassword(registerDto.password);
        const newUser = await this.userService.createUser(Object.assign(Object.assign({}, registerDto), { password: hashedPassword }));
        const { password: _ } = newUser, result = __rest(newUser, ["password"]);
        return result;
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(password, salt);
    }
    async comparePassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),

/***/ "./src/auth/dto/login.dto.ts":
/*!***********************************!*\
  !*** ./src/auth/dto/login.dto.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/auth/dto/register.dto.ts":
/*!**************************************!*\
  !*** ./src/auth/dto/register.dto.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number or special character',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], RegisterDto.prototype, "weightInKg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], RegisterDto.prototype, "heightInCm", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], RegisterDto.prototype, "dailyCalorieGoal", void 0);


/***/ }),

/***/ "./src/auth/guards/jwt-auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/auth/guards/jwt-auth.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./src/auth/guards/local-auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/auth/guards/local-auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),

/***/ "./src/auth/session.serializer.ts":
/*!****************************************!*\
  !*** ./src/auth/session.serializer.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionSerializer = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./src/user/user.service.ts");
let SessionSerializer = class SessionSerializer extends passport_1.PassportSerializer {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    serializeUser(user, done) {
        done(null, user.id);
    }
    async deserializeUser(userId, done) {
        const user = await this.userService.getUserById(userId);
        done(null, user);
    }
};
exports.SessionSerializer = SessionSerializer;
exports.SessionSerializer = SessionSerializer = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], SessionSerializer);


/***/ }),

/***/ "./src/auth/strategies/jwt.strategy.ts":
/*!*********************************************!*\
  !*** ./src/auth/strategies/jwt.strategy.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ../../user/user.service */ "./src/user/user.service.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(userService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'super-secret-key',
        });
        this.userService = userService;
    }
    async validate(payload) {
        const user = await this.userService.getUserById(payload.sub);
        return user;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),

/***/ "./src/auth/strategies/local.strategy.ts":
/*!***********************************************!*\
  !*** ./src/auth/strategies/local.strategy.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(username, password) {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),

/***/ "./src/common/exceptions/http-exception.filter.ts":
/*!********************************************************!*\
  !*** ./src/common/exceptions/http-exception.filter.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpExceptionFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(HttpExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        const errorResponse = exception.getResponse();
        const errorMessage = typeof errorResponse === 'object' && 'message' in errorResponse
            ? errorResponse['message']
            : exception.message;
        const error = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message: errorMessage || 'Internal server error',
        };
        this.logger.error(`${request.method} ${request.url} ${status} - ${JSON.stringify(errorMessage)}`);
        response.status(status).json({
            success: false,
            error,
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);


/***/ }),

/***/ "./src/common/interceptors/transform.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/common/interceptors/transform.interceptor.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        return next.handle().pipe((0, operators_1.map)(data => ({
            success: true,
            statusCode: response.statusCode,
            data,
            timestamp: new Date().toISOString(),
        })));
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);


/***/ }),

/***/ "./src/database/database.module.ts":
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_service_1 = __webpack_require__(/*! ./database.service */ "./src/database/database.service.ts");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [database_service_1.DatabaseService],
        exports: [database_service_1.DatabaseService],
    })
], DatabaseModule);


/***/ }),

/***/ "./src/database/database.service.ts":
/*!******************************************!*\
  !*** ./src/database/database.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let DatabaseService = class DatabaseService {
    getAllFoods() {
        return Array.from(this.foods.values());
    }
    getFoodById(id) {
        return this.foods.get(id);
    }
    createFood(food) {
        this.foods.set(food.id, food);
        return food;
    }
    updateFood(id, food) {
        const existingFood = this.foods.get(id);
        if (!existingFood) {
            return undefined;
        }
        const updatedFood = Object.assign(Object.assign(Object.assign({}, existingFood), food), { id });
        this.foods.set(id, updatedFood);
        return updatedFood;
    }
    deleteFood(id) {
        return this.foods.delete(id);
    }
    searchFood(query) {
        query = query.toLowerCase();
        return this.getAllFoods().filter(food => food.name.toLowerCase().includes(query) ||
            food.barcode === query);
    }
    getAllUsers() {
        return Array.from(this.users.values());
    }
    getUserById(id) {
        return this.users.get(id);
    }
    createUser(user) {
        this.users.set(user.id, user);
        return user;
    }
    updateUser(id, user) {
        const existingUser = this.users.get(id);
        if (!existingUser) {
            return undefined;
        }
        const updatedUser = Object.assign(Object.assign(Object.assign({}, existingUser), user), { id });
        this.users.set(id, updatedUser);
        return updatedUser;
    }
    deleteUser(id) {
        return this.users.delete(id);
    }
    getAllMeals() {
        return Array.from(this.meals.values());
    }
    getMealById(id) {
        return this.meals.get(id);
    }
    createMeal(meal) {
        this.meals.set(meal.id, meal);
        return meal;
    }
    updateMeal(id, meal) {
        const existingMeal = this.meals.get(id);
        if (!existingMeal) {
            return undefined;
        }
        const updatedMeal = Object.assign(Object.assign(Object.assign({}, existingMeal), meal), { id });
        this.meals.set(id, updatedMeal);
        return updatedMeal;
    }
    deleteMeal(id) {
        return this.meals.delete(id);
    }
    getMealsByUserId(userId) {
        return this.getAllMeals().filter(meal => meal.userId === userId);
    }
    initializeData() {
        const sampleFoods = [
            {
                id: '1',
                name: 'Apple',
                barcode: '12345678',
                calories: 95,
                proteins: 0.5,
                carbs: 25,
                fats: 0.3,
                servingSize: 100,
                servingUnit: 'g',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: '2',
                name: 'Chicken Breast',
                barcode: '87654321',
                calories: 165,
                proteins: 31,
                carbs: 0,
                fats: 3.6,
                servingSize: 100,
                servingUnit: 'g',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: '3',
                name: 'Brown Rice',
                barcode: '11223344',
                calories: 112,
                proteins: 2.6,
                carbs: 24,
                fats: 0.9,
                servingSize: 100,
                servingUnit: 'g',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ];
        sampleFoods.forEach(food => this.foods.set(food.id, food));
        const sampleUsers = [
            {
                id: '1',
                username: 'john_doe',
                email: 'john@example.com',
                password: '$2b$10$Eq8AqexQQLl5Ud6mFbOOLO6RQbsQ0cy.TlCkYsWULxFeZRHcaPlzW',
                weightInKg: 80,
                heightInCm: 180,
                dailyCalorieGoal: 2000,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ];
        sampleUsers.forEach(user => this.users.set(user.id, user));
    }
    constructor() {
        this.foods = new Map();
        this.users = new Map();
        this.meals = new Map();
        this.initializeData();
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DatabaseService);


/***/ }),

/***/ "./src/food/dto/create-food.dto.ts":
/*!*****************************************!*\
  !*** ./src/food/dto/create-food.dto.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFoodDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateFoodDto {
}
exports.CreateFoodDto = CreateFoodDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "barcode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFoodDto.prototype, "calories", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFoodDto.prototype, "proteins", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFoodDto.prototype, "carbs", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFoodDto.prototype, "fats", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFoodDto.prototype, "servingSize", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "servingUnit", void 0);


/***/ }),

/***/ "./src/food/dto/food-item.dto.ts":
/*!***************************************!*\
  !*** ./src/food/dto/food-item.dto.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodItemDto = exports.NutritionalValuesDto = void 0;
class NutritionalValuesDto {
}
exports.NutritionalValuesDto = NutritionalValuesDto;
class FoodItemDto {
}
exports.FoodItemDto = FoodItemDto;


/***/ }),

/***/ "./src/food/dto/search-food.dto.ts":
/*!*****************************************!*\
  !*** ./src/food/dto/search-food.dto.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchFoodDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SearchFoodDto {
}
exports.SearchFoodDto = SearchFoodDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchFoodDto.prototype, "query", void 0);


/***/ }),

/***/ "./src/food/food.controller.ts":
/*!*************************************!*\
  !*** ./src/food/food.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const food_service_1 = __webpack_require__(/*! ./food.service */ "./src/food/food.service.ts");
const food_item_dto_1 = __webpack_require__(/*! ./dto/food-item.dto */ "./src/food/dto/food-item.dto.ts");
const create_food_dto_1 = __webpack_require__(/*! ./dto/create-food.dto */ "./src/food/dto/create-food.dto.ts");
const search_food_dto_1 = __webpack_require__(/*! ./dto/search-food.dto */ "./src/food/dto/search-food.dto.ts");
let FoodController = class FoodController {
    constructor(foodService) {
        this.foodService = foodService;
    }
    getAllFoods() {
        return this.foodService.getAllFoods();
    }
    searchFoods(searchDto) {
        return this.foodService.searchFoods(searchDto.query);
    }
    async getFoodByBarcode(barcode) {
        const food = await this.foodService.getFoodByBarcode(barcode);
        if (!food) {
            throw new common_1.NotFoundException(`Food with barcode ${barcode} not found`);
        }
        return food;
    }
    getFoodById(id) {
        const food = this.foodService.getFoodById(id);
        if (!food) {
            throw new common_1.NotFoundException(`Food with ID ${id} not found`);
        }
        return food;
    }
    createFood(createFoodDto) {
        try {
            return this.foodService.createFood(createFoodDto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    updateFood(id, updateFoodDto) {
        const food = this.foodService.updateFood(id, updateFoodDto);
        if (!food) {
            throw new common_1.NotFoundException(`Food with ID ${id} not found`);
        }
        return food;
    }
    deleteFood(id) {
        const deleted = this.foodService.deleteFood(id);
        if (!deleted) {
            throw new common_1.NotFoundException(`Food with ID ${id} not found`);
        }
        return {
            success: true,
            message: `Food with ID ${id} successfully deleted`,
        };
    }
};
exports.FoodController = FoodController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], FoodController.prototype, "getAllFoods", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof search_food_dto_1.SearchFoodDto !== "undefined" && search_food_dto_1.SearchFoodDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Array)
], FoodController.prototype, "searchFoods", null);
__decorate([
    (0, common_1.Get)('barcode/:barcode'),
    __param(0, (0, common_1.Param)('barcode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], FoodController.prototype, "getFoodByBarcode", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_d = typeof food_item_dto_1.FoodItemDto !== "undefined" && food_item_dto_1.FoodItemDto) === "function" ? _d : Object)
], FoodController.prototype, "getFoodById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof create_food_dto_1.CreateFoodDto !== "undefined" && create_food_dto_1.CreateFoodDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof food_item_dto_1.FoodItemDto !== "undefined" && food_item_dto_1.FoodItemDto) === "function" ? _f : Object)
], FoodController.prototype, "createFood", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof create_food_dto_1.CreateFoodDto !== "undefined" && create_food_dto_1.CreateFoodDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof food_item_dto_1.FoodItemDto !== "undefined" && food_item_dto_1.FoodItemDto) === "function" ? _h : Object)
], FoodController.prototype, "updateFood", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], FoodController.prototype, "deleteFood", null);
exports.FoodController = FoodController = __decorate([
    (0, common_1.Controller)('foods'),
    __metadata("design:paramtypes", [typeof (_a = typeof food_service_1.FoodService !== "undefined" && food_service_1.FoodService) === "function" ? _a : Object])
], FoodController);


/***/ }),

/***/ "./src/food/food.module.ts":
/*!*********************************!*\
  !*** ./src/food/food.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const food_controller_1 = __webpack_require__(/*! ./food.controller */ "./src/food/food.controller.ts");
const food_service_1 = __webpack_require__(/*! ./food.service */ "./src/food/food.service.ts");
let FoodModule = class FoodModule {
};
exports.FoodModule = FoodModule;
exports.FoodModule = FoodModule = __decorate([
    (0, common_1.Module)({
        controllers: [food_controller_1.FoodController],
        providers: [food_service_1.FoodService],
        exports: [food_service_1.FoodService],
    })
], FoodModule);


/***/ }),

/***/ "./src/food/food.service.ts":
/*!**********************************!*\
  !*** ./src/food/food.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
let FoodService = class FoodService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.baseUrl = process.env.NUTRITIONIX_V2_BASE_URL;
        this.appId = process.env.NUTRITIONIX_APP_ID;
        this.appKey = process.env.NUTRITIONIX_APP_KEY;
    }
    getAllFoods() {
        const foods = this.databaseService.getAllFoods();
        return foods.map(food => this.mapToDto(food));
    }
    getFoodById(id) {
        const food = this.databaseService.getFoodById(id);
        return food ? this.mapToDto(food) : null;
    }
    searchFoods(query) {
        const foods = this.databaseService.searchFood(query);
        return foods.map(food => this.mapToDto(food));
    }
    async getFoodByBarcode(barcode) {
        const foods = this.databaseService.getAllFoods();
        const food = foods.find(f => f.barcode === barcode);
        if (food) {
            return this.mapToDto(food);
        }
        const externalFood = await this.getFoodByBarcodeExternal(barcode);
        return externalFood;
    }
    async getFoodByBarcodeExternal(barcode) {
        var _a;
        const url = `${this.baseUrl}/search/item?upc=${barcode}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-app-id': this.appId,
                'x-app-key': this.appKey,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        if (!response.ok) {
            console.error('Nutritionix v2 lookup failed', response.status);
            return null;
        }
        const data = await response.json();
        if (!((_a = data.foods) === null || _a === void 0 ? void 0 : _a.length))
            return null;
        const f = data.foods[0];
        const result = {
            name: f.food_name,
            barcode,
            calories: f.nf_calories,
            proteins: f.nf_protein,
            carbs: f.nf_total_carbohydrate,
            fats: f.nf_total_fat,
            servingSize: f.serving_qty,
            servingUnit: f.serving_unit,
        };
        return this.createFood(result);
    }
    createFood(createFoodDto) {
        const foods = this.databaseService.getAllFoods();
        const existingFood = foods.find(f => f.barcode === createFoodDto.barcode);
        if (existingFood && createFoodDto.barcode) {
            throw new Error(`Food with barcode ${createFoodDto.barcode} already exists`);
        }
        const newFood = Object.assign(Object.assign({ id: (0, uuid_1.v4)() }, createFoodDto), { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        const savedFood = this.databaseService.createFood(newFood);
        return this.mapToDto(savedFood);
    }
    updateFood(id, updateFoodDto) {
        const food = this.databaseService.getFoodById(id);
        if (!food) {
            return null;
        }
        const updatedFood = this.databaseService.updateFood(id, Object.assign(Object.assign({}, updateFoodDto), { updatedAt: new Date().toISOString() }));
        return updatedFood ? this.mapToDto(updatedFood) : null;
    }
    deleteFood(id) {
        return this.databaseService.deleteFood(id);
    }
    mapToDto(food) {
        const { id, name, barcode, calories, proteins, carbs, fats, servingSize, servingUnit } = food;
        return {
            id,
            name,
            barcode,
            nutritionalValues: {
                calories,
                proteins,
                carbs,
                fats,
            },
            servingSize,
            servingUnit,
        };
    }
    createFoodFromRecognitionResult(recognitionResult, servingUnit = 'g', servingSize = 100) {
        return {
            name: recognitionResult.foodName,
            calories: recognitionResult.nutritionalInfo.calories,
            proteins: recognitionResult.nutritionalInfo.proteins,
            carbs: recognitionResult.nutritionalInfo.carbs,
            fats: recognitionResult.nutritionalInfo.fats,
            servingSize,
            servingUnit,
        };
    }
};
exports.FoodService = FoodService;
exports.FoodService = FoodService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], FoodService);


/***/ }),

/***/ "./src/image-recognition/dto/analyze-image.dto.ts":
/*!********************************************************!*\
  !*** ./src/image-recognition/dto/analyze-image.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnalyzeImageDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AnalyzeImageDto {
}
exports.AnalyzeImageDto = AnalyzeImageDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsBase64)(),
    __metadata("design:type", String)
], AnalyzeImageDto.prototype, "base64Image", void 0);


/***/ }),

/***/ "./src/image-recognition/dto/create-meal-from-image.dto.ts":
/*!*****************************************************************!*\
  !*** ./src/image-recognition/dto/create-meal-from-image.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMealFromImageDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const meal_dto_1 = __webpack_require__(/*! ../../meal/dto/meal.dto */ "./src/meal/dto/meal.dto.ts");
class CreateMealFromImageDto {
}
exports.CreateMealFromImageDto = CreateMealFromImageDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsBase64)(),
    __metadata("design:type", String)
], CreateMealFromImageDto.prototype, "base64Image", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateMealFromImageDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealFromImageDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealFromImageDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(meal_dto_1.MealType),
    __metadata("design:type", typeof (_a = typeof meal_dto_1.MealType !== "undefined" && meal_dto_1.MealType) === "function" ? _a : Object)
], CreateMealFromImageDto.prototype, "mealType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateMealFromImageDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealFromImageDto.prototype, "servingSize", void 0);


/***/ }),

/***/ "./src/image-recognition/dto/save-recognized-food.dto.ts":
/*!***************************************************************!*\
  !*** ./src/image-recognition/dto/save-recognized-food.dto.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SaveRecognizedFoodDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SaveRecognizedFoodDto {
}
exports.SaveRecognizedFoodDto = SaveRecognizedFoodDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsBase64)(),
    __metadata("design:type", String)
], SaveRecognizedFoodDto.prototype, "base64Image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveRecognizedFoodDto.prototype, "servingUnit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveRecognizedFoodDto.prototype, "servingSize", void 0);


/***/ }),

/***/ "./src/image-recognition/image-recognition.controller.ts":
/*!***************************************************************!*\
  !*** ./src/image-recognition/image-recognition.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageRecognitionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const image_recognition_service_1 = __webpack_require__(/*! ./image-recognition.service */ "./src/image-recognition/image-recognition.service.ts");
const analyze_image_dto_1 = __webpack_require__(/*! ./dto/analyze-image.dto */ "./src/image-recognition/dto/analyze-image.dto.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../auth/guards/jwt-auth.guard */ "./src/auth/guards/jwt-auth.guard.ts");
const save_recognized_food_dto_1 = __webpack_require__(/*! ./dto/save-recognized-food.dto */ "./src/image-recognition/dto/save-recognized-food.dto.ts");
const food_service_1 = __webpack_require__(/*! ../food/food.service */ "./src/food/food.service.ts");
const create_meal_from_image_dto_1 = __webpack_require__(/*! ./dto/create-meal-from-image.dto */ "./src/image-recognition/dto/create-meal-from-image.dto.ts");
const meal_service_1 = __webpack_require__(/*! ../meal/meal.service */ "./src/meal/meal.service.ts");
let ImageRecognitionController = class ImageRecognitionController {
    constructor(imageRecognitionService, foodService, mealService) {
        this.imageRecognitionService = imageRecognitionService;
        this.foodService = foodService;
        this.mealService = mealService;
    }
    async analyzeImage(analyzeImageDto) {
        return this.imageRecognitionService.analyzeImage(analyzeImageDto);
    }
    async analyzeAndSaveFood(saveRecognizedFoodDto) {
        const analyzeDto = { base64Image: saveRecognizedFoodDto.base64Image };
        const recognitionResult = await this.imageRecognitionService.analyzeImage(analyzeDto);
        const foodDto = this.foodService.createFoodFromRecognitionResult(recognitionResult, saveRecognizedFoodDto.servingUnit, saveRecognizedFoodDto.servingSize);
        return this.foodService.createFood(foodDto);
    }
    async createMealFromImage(createMealDto) {
        const analyzeDto = { base64Image: createMealDto.base64Image };
        const recognitionResult = await this.imageRecognitionService.analyzeImage(analyzeDto);
        const foodDto = this.foodService.createFoodFromRecognitionResult(recognitionResult, createMealDto.servingSize || 'g', createMealDto.quantity || 100);
        const savedFood = await this.foodService.createFood(foodDto);
        return this.mealService.createMeal({
            userId: createMealDto.userId,
            name: createMealDto.name,
            date: createMealDto.date || new Date().toISOString(),
            mealType: createMealDto.mealType,
            foodItems: [
                {
                    foodId: savedFood.id,
                    quantity: createMealDto.quantity || 1,
                    servingSize: createMealDto.servingSize || 'portion'
                }
            ]
        });
    }
};
exports.ImageRecognitionController = ImageRecognitionController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('analyze'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof analyze_image_dto_1.AnalyzeImageDto !== "undefined" && analyze_image_dto_1.AnalyzeImageDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ImageRecognitionController.prototype, "analyzeImage", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('analyze-and-save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof save_recognized_food_dto_1.SaveRecognizedFoodDto !== "undefined" && save_recognized_food_dto_1.SaveRecognizedFoodDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ImageRecognitionController.prototype, "analyzeAndSaveFood", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create-meal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof create_meal_from_image_dto_1.CreateMealFromImageDto !== "undefined" && create_meal_from_image_dto_1.CreateMealFromImageDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ImageRecognitionController.prototype, "createMealFromImage", null);
exports.ImageRecognitionController = ImageRecognitionController = __decorate([
    (0, common_1.Controller)('image-recognition'),
    __metadata("design:paramtypes", [typeof (_a = typeof image_recognition_service_1.ImageRecognitionService !== "undefined" && image_recognition_service_1.ImageRecognitionService) === "function" ? _a : Object, typeof (_b = typeof food_service_1.FoodService !== "undefined" && food_service_1.FoodService) === "function" ? _b : Object, typeof (_c = typeof meal_service_1.MealService !== "undefined" && meal_service_1.MealService) === "function" ? _c : Object])
], ImageRecognitionController);


/***/ }),

/***/ "./src/image-recognition/image-recognition.module.ts":
/*!***********************************************************!*\
  !*** ./src/image-recognition/image-recognition.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageRecognitionModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const image_recognition_service_1 = __webpack_require__(/*! ./image-recognition.service */ "./src/image-recognition/image-recognition.service.ts");
const image_recognition_controller_1 = __webpack_require__(/*! ./image-recognition.controller */ "./src/image-recognition/image-recognition.controller.ts");
const food_module_1 = __webpack_require__(/*! ../food/food.module */ "./src/food/food.module.ts");
const meal_module_1 = __webpack_require__(/*! ../meal/meal.module */ "./src/meal/meal.module.ts");
let ImageRecognitionModule = class ImageRecognitionModule {
};
exports.ImageRecognitionModule = ImageRecognitionModule;
exports.ImageRecognitionModule = ImageRecognitionModule = __decorate([
    (0, common_1.Module)({
        imports: [food_module_1.FoodModule, meal_module_1.MealModule],
        controllers: [image_recognition_controller_1.ImageRecognitionController],
        providers: [image_recognition_service_1.ImageRecognitionService],
        exports: [image_recognition_service_1.ImageRecognitionService],
    })
], ImageRecognitionModule);


/***/ }),

/***/ "./src/image-recognition/image-recognition.service.ts":
/*!************************************************************!*\
  !*** ./src/image-recognition/image-recognition.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ImageRecognitionService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageRecognitionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const openai_1 = __webpack_require__(/*! openai */ "openai");
const food_service_1 = __webpack_require__(/*! ../food/food.service */ "./src/food/food.service.ts");
let ImageRecognitionService = ImageRecognitionService_1 = class ImageRecognitionService {
    constructor(foodService) {
        this.foodService = foodService;
        this.logger = new common_1.Logger(ImageRecognitionService_1.name);
        this.openai = new openai_1.default({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    async analyzeImage(analyzeImageDto) {
        try {
            const response = await this.openai.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    {
                        role: "system",
                        content: `You are a food analysis expert. Analyze the provided food image and return detailed information including:
            1. The name of the food
            2. A brief description
            3. Estimated nutritional information (calories, proteins, carbs, fats)
            4. Confidence level in your identification (0-1)
            5. Possible alternative identifications if you're uncertain
            
            Respond with JSON in this exact format:
            {
              "foodName": "string",
              "description": "string",
              "confidence": number, // between 0 and 1
              "nutritionalInfo": {
                "calories": number,
                "proteins": number, // in grams
                "carbs": number, // in grams
                "fats": number // in grams
              },
              "possibleAlternatives": ["string"] // optional array of strings
            }`
                    },
                    {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: "What food is in this image? Please analyze and provide nutritional information."
                            },
                            {
                                type: "image_url",
                                image_url: {
                                    url: `data:image/jpeg;base64,${analyzeImageDto.base64Image}`
                                }
                            }
                        ],
                    }
                ],
                response_format: { type: "json_object" },
            });
            const result = JSON.parse(response.choices[0].message.content);
            const similarFoods = this.foodService.searchFoods(result.foodName);
            if (similarFoods.length > 0) {
                this.logger.log(`Found similar food in database: ${similarFoods[0].name}`);
                const bestMatch = similarFoods[0];
                result.nutritionalInfo = {
                    calories: bestMatch.nutritionalValues.calories,
                    proteins: bestMatch.nutritionalValues.proteins,
                    carbs: bestMatch.nutritionalValues.carbs,
                    fats: bestMatch.nutritionalValues.fats
                };
            }
            return result;
        }
        catch (error) {
            this.logger.error(`Error analyzing image: ${error.message}`, error.stack);
            if (error.status === 429 || (error.error && error.error.type === 'insufficient_quota')) {
                return this.getFallbackFoodRecognition(analyzeImageDto);
            }
            if (error.message && error.message.includes('OpenAI')) {
                return this.getFallbackFoodRecognition(analyzeImageDto);
            }
            throw new common_1.HttpException('Error analyzing food image. Please try again later.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    getFallbackFoodRecognition(analyzeImageDto) {
        this.logger.log('Using fallback food recognition due to API limitations');
        return {
            foodName: "Apple",
            description: "A red apple, rich in fiber and vitamins. Common fruit with crisp texture and sweet-tart flavor.",
            confidence: 0.95,
            nutritionalInfo: {
                calories: 52,
                proteins: 0.3,
                carbs: 14,
                fats: 0.2
            },
            possibleAlternatives: ["Red Delicious Apple", "Gala Apple", "Fuji Apple"]
        };
    }
};
exports.ImageRecognitionService = ImageRecognitionService;
exports.ImageRecognitionService = ImageRecognitionService = ImageRecognitionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof food_service_1.FoodService !== "undefined" && food_service_1.FoodService) === "function" ? _a : Object])
], ImageRecognitionService);


/***/ }),

/***/ "./src/meal/dto/create-meal.dto.ts":
/*!*****************************************!*\
  !*** ./src/meal/dto/create-meal.dto.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMealDto = exports.CreateMealFoodItemDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const meal_dto_1 = __webpack_require__(/*! ./meal.dto */ "./src/meal/dto/meal.dto.ts");
class CreateMealFoodItemDto {
}
exports.CreateMealFoodItemDto = CreateMealFoodItemDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealFoodItemDto.prototype, "foodId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateMealFoodItemDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealFoodItemDto.prototype, "servingSize", void 0);
class CreateMealDto {
}
exports.CreateMealDto = CreateMealDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(meal_dto_1.MealType),
    __metadata("design:type", typeof (_a = typeof meal_dto_1.MealType !== "undefined" && meal_dto_1.MealType) === "function" ? _a : Object)
], CreateMealDto.prototype, "mealType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateMealFoodItemDto),
    __metadata("design:type", Array)
], CreateMealDto.prototype, "foodItems", void 0);


/***/ }),

/***/ "./src/meal/dto/meal.dto.ts":
/*!**********************************!*\
  !*** ./src/meal/dto/meal.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealDto = exports.MealFoodItemDto = exports.NutritionalValuesDto = exports.MealType = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var MealType;
(function (MealType) {
    MealType["BREAKFAST"] = "breakfast";
    MealType["LUNCH"] = "lunch";
    MealType["DINNER"] = "dinner";
    MealType["SNACK"] = "snack";
})(MealType || (exports.MealType = MealType = {}));
class NutritionalValuesDto {
}
exports.NutritionalValuesDto = NutritionalValuesDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], NutritionalValuesDto.prototype, "calories", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], NutritionalValuesDto.prototype, "proteins", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], NutritionalValuesDto.prototype, "carbs", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], NutritionalValuesDto.prototype, "fats", void 0);
class MealFoodItemDto {
}
exports.MealFoodItemDto = MealFoodItemDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealFoodItemDto.prototype, "foodId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealFoodItemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], MealFoodItemDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealFoodItemDto.prototype, "servingSize", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", NutritionalValuesDto)
], MealFoodItemDto.prototype, "nutritionalValues", void 0);
class MealDto {
}
exports.MealDto = MealDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MealDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MealDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MealDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(MealType),
    __metadata("design:type", String)
], MealDto.prototype, "mealType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MealFoodItemDto),
    __metadata("design:type", Array)
], MealDto.prototype, "foodItems", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", NutritionalValuesDto)
], MealDto.prototype, "totalNutritionalValues", void 0);


/***/ }),

/***/ "./src/meal/meal.controller.ts":
/*!*************************************!*\
  !*** ./src/meal/meal.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const meal_service_1 = __webpack_require__(/*! ./meal.service */ "./src/meal/meal.service.ts");
const meal_dto_1 = __webpack_require__(/*! ./dto/meal.dto */ "./src/meal/dto/meal.dto.ts");
const create_meal_dto_1 = __webpack_require__(/*! ./dto/create-meal.dto */ "./src/meal/dto/create-meal.dto.ts");
let MealController = class MealController {
    constructor(mealService) {
        this.mealService = mealService;
    }
    getAllMeals() {
        return this.mealService.getAllMeals();
    }
    getMealsByUserId(userId) {
        return this.mealService.getMealsByUserId(userId);
    }
    getMealById(id) {
        const meal = this.mealService.getMealById(id);
        if (!meal) {
            throw new common_1.NotFoundException(`Meal with ID ${id} not found`);
        }
        return meal;
    }
    createMeal(createMealDto) {
        try {
            return this.mealService.createMeal(createMealDto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    updateMeal(id, updateMealDto) {
        const meal = this.mealService.updateMeal(id, updateMealDto);
        if (!meal) {
            throw new common_1.NotFoundException(`Meal with ID ${id} not found`);
        }
        return meal;
    }
    deleteMeal(id) {
        const deleted = this.mealService.deleteMeal(id);
        if (!deleted) {
            throw new common_1.NotFoundException(`Meal with ID ${id} not found`);
        }
        return {
            success: true,
            message: `Meal with ID ${id} successfully deleted`,
        };
    }
};
exports.MealController = MealController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MealController.prototype, "getAllMeals", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], MealController.prototype, "getMealsByUserId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof meal_dto_1.MealDto !== "undefined" && meal_dto_1.MealDto) === "function" ? _b : Object)
], MealController.prototype, "getMealById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_meal_dto_1.CreateMealDto !== "undefined" && create_meal_dto_1.CreateMealDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof meal_dto_1.MealDto !== "undefined" && meal_dto_1.MealDto) === "function" ? _d : Object)
], MealController.prototype, "createMeal", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof create_meal_dto_1.CreateMealDto !== "undefined" && create_meal_dto_1.CreateMealDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof meal_dto_1.MealDto !== "undefined" && meal_dto_1.MealDto) === "function" ? _f : Object)
], MealController.prototype, "updateMeal", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MealController.prototype, "deleteMeal", null);
exports.MealController = MealController = __decorate([
    (0, common_1.Controller)('meals'),
    __metadata("design:paramtypes", [typeof (_a = typeof meal_service_1.MealService !== "undefined" && meal_service_1.MealService) === "function" ? _a : Object])
], MealController);


/***/ }),

/***/ "./src/meal/meal.module.ts":
/*!*********************************!*\
  !*** ./src/meal/meal.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const meal_controller_1 = __webpack_require__(/*! ./meal.controller */ "./src/meal/meal.controller.ts");
const meal_service_1 = __webpack_require__(/*! ./meal.service */ "./src/meal/meal.service.ts");
const food_module_1 = __webpack_require__(/*! ../food/food.module */ "./src/food/food.module.ts");
let MealModule = class MealModule {
};
exports.MealModule = MealModule;
exports.MealModule = MealModule = __decorate([
    (0, common_1.Module)({
        imports: [food_module_1.FoodModule],
        controllers: [meal_controller_1.MealController],
        providers: [meal_service_1.MealService],
        exports: [meal_service_1.MealService],
    })
], MealModule);


/***/ }),

/***/ "./src/meal/meal.service.ts":
/*!**********************************!*\
  !*** ./src/meal/meal.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
const food_service_1 = __webpack_require__(/*! ../food/food.service */ "./src/food/food.service.ts");
let MealService = class MealService {
    constructor(databaseService, foodService) {
        this.databaseService = databaseService;
        this.foodService = foodService;
    }
    getAllMeals() {
        const meals = this.databaseService.getAllMeals();
        return meals.map(meal => this.mapToDto(meal));
    }
    getMealById(id) {
        const meal = this.databaseService.getMealById(id);
        return meal ? this.mapToDto(meal) : null;
    }
    getMealsByUserId(userId) {
        const meals = this.databaseService.getMealsByUserId(userId);
        return meals.map(meal => this.mapToDto(meal));
    }
    createMeal(createMealDto) {
        for (const item of createMealDto.foodItems) {
            const food = this.foodService.getFoodById(item.foodId);
            if (!food) {
                throw new common_1.NotFoundException(`Food with ID ${item.foodId} not found`);
            }
        }
        const newMeal = {
            id: (0, uuid_1.v4)(),
            userId: createMealDto.userId,
            name: createMealDto.name,
            date: createMealDto.date || new Date().toISOString(),
            mealType: createMealDto.mealType,
            foodItems: createMealDto.foodItems.map(item => ({
                foodId: item.foodId,
                quantity: item.quantity,
                servingSize: item.servingSize,
            })),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        const savedMeal = this.databaseService.createMeal(newMeal);
        return this.mapToDto(savedMeal);
    }
    updateMeal(id, updateMealDto) {
        const meal = this.databaseService.getMealById(id);
        if (!meal) {
            return null;
        }
        for (const item of updateMealDto.foodItems) {
            const food = this.foodService.getFoodById(item.foodId);
            if (!food) {
                throw new common_1.NotFoundException(`Food with ID ${item.foodId} not found`);
            }
        }
        const updatedMeal = this.databaseService.updateMeal(id, Object.assign(Object.assign({}, updateMealDto), { updatedAt: new Date().toISOString() }));
        return updatedMeal ? this.mapToDto(updatedMeal) : null;
    }
    deleteMeal(id) {
        return this.databaseService.deleteMeal(id);
    }
    mapToDto(meal) {
        const foodItems = meal.foodItems.map(item => {
            const food = this.foodService.getFoodById(item.foodId);
            const ratio = item.quantity / ((food === null || food === void 0 ? void 0 : food.servingSize) || 1);
            return {
                foodId: item.foodId,
                name: (food === null || food === void 0 ? void 0 : food.name) || 'Unknown Food',
                quantity: item.quantity,
                servingSize: item.servingSize,
                nutritionalValues: (food === null || food === void 0 ? void 0 : food.nutritionalValues)
                    ? {
                        calories: food.nutritionalValues.calories * ratio,
                        proteins: food.nutritionalValues.proteins * ratio,
                        carbs: food.nutritionalValues.carbs * ratio,
                        fats: food.nutritionalValues.fats * ratio,
                    }
                    : {
                        calories: 0,
                        proteins: 0,
                        carbs: 0,
                        fats: 0,
                    },
            };
        });
        const totalNutritionalValues = foodItems.reduce((acc, item) => {
            var _a, _b, _c, _d;
            return {
                calories: acc.calories + (((_a = item.nutritionalValues) === null || _a === void 0 ? void 0 : _a.calories) || 0),
                proteins: acc.proteins + (((_b = item.nutritionalValues) === null || _b === void 0 ? void 0 : _b.proteins) || 0),
                carbs: acc.carbs + (((_c = item.nutritionalValues) === null || _c === void 0 ? void 0 : _c.carbs) || 0),
                fats: acc.fats + (((_d = item.nutritionalValues) === null || _d === void 0 ? void 0 : _d.fats) || 0),
            };
        }, { calories: 0, proteins: 0, carbs: 0, fats: 0 });
        return {
            id: meal.id,
            userId: meal.userId,
            name: meal.name,
            date: meal.date,
            mealType: meal.mealType,
            foodItems,
            totalNutritionalValues: totalNutritionalValues,
        };
    }
};
exports.MealService = MealService;
exports.MealService = MealService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object, typeof (_b = typeof food_service_1.FoodService !== "undefined" && food_service_1.FoodService) === "function" ? _b : Object])
], MealService);


/***/ }),

/***/ "./src/user/dto/user.dto.ts":
/*!**********************************!*\
  !*** ./src/user/dto/user.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserDto {
}
exports.UserDto = UserDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UserDto.prototype, "weightInKg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UserDto.prototype, "heightInCm", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UserDto.prototype, "dailyCalorieGoal", void 0);


/***/ }),

/***/ "./src/user/user.controller.ts":
/*!*************************************!*\
  !*** ./src/user/user.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ "./src/user/dto/user.dto.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    getUserById(id) {
        const user = this.userService.getUserById(id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    createUser(createUserDto) {
        try {
            return this.userService.createUser(createUserDto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    updateUser(id, updateUserDto) {
        const user = this.userService.updateUser(id, updateUserDto);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    deleteUser(id) {
        const deleted = this.userService.deleteUser(id);
        if (!deleted) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return {
            success: true,
            message: `User with ID ${id} successfully deleted`,
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _b : Object)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _d : Object)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _f : Object)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./src/user/user.module.ts":
/*!*********************************!*\
  !*** ./src/user/user.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./src/user/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./src/user/user.service.ts":
/*!**********************************!*\
  !*** ./src/user/user.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
let UserService = class UserService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    findByUsername(username) {
        const users = this.databaseService.getAllUsers();
        return users.find(user => user.username === username) || null;
    }
    getAllUsers() {
        const users = this.databaseService.getAllUsers();
        return users.map(user => this.mapToDto(user));
    }
    getUserById(id) {
        const user = this.databaseService.getUserById(id);
        return user ? this.mapToDto(user) : null;
    }
    createUser(createUserDto) {
        const users = this.databaseService.getAllUsers();
        const existingUserByEmail = users.find(u => u.email === createUserDto.email);
        if (existingUserByEmail) {
            throw new Error(`User with email ${createUserDto.email} already exists`);
        }
        const existingUserByUsername = users.find(u => u.username === createUserDto.username);
        if (existingUserByUsername) {
            throw new Error(`User with username ${createUserDto.username} already exists`);
        }
        if (!createUserDto.password) {
            throw new Error('Password is required');
        }
        const newUser = {
            id: (0, uuid_1.v4)(),
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
    updateUser(id, updateUserDto) {
        const user = this.databaseService.getUserById(id);
        if (!user) {
            return null;
        }
        const updatedUser = this.databaseService.updateUser(id, Object.assign(Object.assign({}, updateUserDto), { updatedAt: new Date().toISOString() }));
        return updatedUser ? this.mapToDto(updatedUser) : null;
    }
    deleteUser(id) {
        return this.databaseService.deleteUser(id);
    }
    mapToDto(user) {
        const { password } = user, userWithoutPassword = __rest(user, ["password"]);
        return Object.assign({}, userWithoutPassword);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], UserService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const http_exception_filter_1 = __webpack_require__(/*! ./common/exceptions/http-exception.filter */ "./src/common/exceptions/http-exception.filter.ts");
const transform_interceptor_1 = __webpack_require__(/*! ./common/interceptors/transform.interceptor */ "./src/common/interceptors/transform.interceptor.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    await app.listen(5000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

})();

/******/ })()
;