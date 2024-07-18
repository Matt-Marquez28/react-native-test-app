import bcrypt from 'bcrypt';

// Hash Functions
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

// Compare || Decrypt Function
const comparePassword=(password, hashed)=>{
    return bcrypt.compare(password, hashed);
};

export default {hashPassword, comparePassword};

