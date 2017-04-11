import * as mongoose from 'mongoose';
import * as validator from 'validator';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    unique: true,
    validate: {
      // validator: (value) => {
      //   return validator.isEmail(value);
      // },
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

// const User = mongoose.model('User', userSchema);

// export default User;

export const User = mongoose.model('User', userSchema);


