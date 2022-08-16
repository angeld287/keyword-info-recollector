/**
 * Define interface for User Model
 *
 * @author Angel Angeles <aangeles@litystyles.com>
 */

import { Express } from 'express';
import mongoose = require("mongoose");
import passport = require('passport');

export interface IUser extends Express.User {
    id: string;
    email: string;
    phoneNumber?: string;
    password: string;

    fullname: string;
    gender: string;
    userName: string;
}

const UserSchema = new mongoose.Schema<IUser>(
    {
        id: {
            type: String,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
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
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('User', UserSchema);;