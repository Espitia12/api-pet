"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDataSourceImpl = void 0;
const users_model_1 = require("../../data/models/users.model");
const domain_1 = require("../../domain"); //2
class AuthDataSourceImpl {
    register(registerUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = registerUserDto; // 4
            try { //5
                const exists = yield users_model_1.UserModel.findOne({ email });
                if (exists)
                    throw domain_1.CustomError.badRequest("User already exists");
                const user = yield users_model_1.UserModel.create({
                    name: name,
                    email: email,
                    password: password,
                });
                yield user.save();
                return new domain_1.UserEntity(// 6
                '1', name, email, password, ['USER']);
            }
            catch (error) {
                if (error instanceof domain_1.CustomError) { //7
                    throw error;
                }
                throw domain_1.CustomError.internalServer(); //8
            }
        });
    }
}
exports.AuthDataSourceImpl = AuthDataSourceImpl;
