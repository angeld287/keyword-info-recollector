/**
 * Define interface for User Model
 *
 * @author Angel Angeles <aangeles@litystyles.com>
 */

import mongoose = require("mongoose");

export interface IKeyword {
    id: string;
    name: string;
}

const KeywordSchema = new mongoose.Schema<IKeyword>(
    {
        id: {
            type: String,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Keyword', KeywordSchema);;