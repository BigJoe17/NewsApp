import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 8,
		},
		email:{
            type: String,
            required: true,
        },
        phone :{
            type: String,
            required: true,
        }
		// createdAt, updatedAt => Member since <createdAt>
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;