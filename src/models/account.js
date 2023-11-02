"use strict";

const { Schema, model } = require("mongoose");

const AccountSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    first_name: {
      type: String,
      trim: true,
      required: true,
    },

    last_name: {
      type: String,
      trim: true,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    is_staff: {
      type: Boolean,
      default: false,
    },
    is_superadmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "account",
    timestamps: true,
  }
);

//---------------------------------------------------------------/;
const passwordEncrypt = require("../helpers/passwordEncrypt");

AccountSchema.pre(["save", "updateOne"], function (next) {
  const data = this._update || this;

  const isEmailValidated = data.email
    ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    : true;
  if (isEmailValidated) {
    const isPasswordValidated =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_.:,;/\*+-@$!%*?&]).{8,}$/.test(
        data.password
      );
    if (isPasswordValidated) {
      this.password = data.password = passwordEncrypt(data.password);
      this._update = data;

      next();
    } else {
      next(new Error("Password not validated"));
    }
  } else {
    next(new Error("Email not validated"));
  }
});
AccountSchema.pre("init", function (data) {
  data.id = this._id
  data.createds=data.createAt.toLocaleDateString('tr-tr')
})

//---------------------------------------------------------------/;


module.exports = model("Account", AccountSchema);
