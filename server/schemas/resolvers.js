const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('savedBooks');
        },
        user: async (parent, { userId, username }) => {
            if (userId) {
                return User.findOne({ _id: userId }).populate('savedBooks');
            } else if (username) {
                return User.findOne({ username: username }).populate('savedBooks');
            } else {
                return "no user found"
            }
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return User.creat({ username, email, password })
        },
        addBook: async (parent, { userId, bookId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: { savedBooks: { bookId } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },

        login: async (parent, { email, password }) => {
            // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
            const user = await User.findOne({ email });

            // If there is no user with that email address, return an Authentication error stating so
            if (!user) {
                throw AuthenticationError
            }

            // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
            const correctPw = await user.isCorrectPassword(password);

            // If the password is incorrect, return an Authentication error stating so
            if (!correctPw) {
                throw AuthenticationError
            }

            // If email and password are correct, sign user into the application with a JWT
            const token = signToken(user);

            // Return an `Auth` object that consists of the signed token and user's information
            return { token, user };
        },
        removeBook: async (parent, { userId, bookId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: { bookId } } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;
