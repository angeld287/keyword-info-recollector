/**
 * Define interface for User Model
 *
 * @author Angel Angeles <aangeles@litystyles.com>
 */

import { Express } from 'express';
import mongoose = require("mongoose");

export interface IUser extends Express.User {
    id: string;
    email: string;
    phoneNumber?: string;
    password?: string;

    fullname: string;
    gender: string;
    userName: string;
}

export const UserSchema = new mongoose.Schema<IUser>(
    {
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: false
        },
        fullname: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        userName: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

export default IUser;