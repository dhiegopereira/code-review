import bcrypt from 'bcrypt';

export const hash = async () => {
    const BCRYPT_SALT_ROUNDS = 12;
    const dateNow = new Date();

    return new Promise((resolve, reject) => {
        bcrypt.hash(dateNow.getTime().toString(), BCRYPT_SALT_ROUNDS, (err, hash) => {
            if (err) {
                reject(err)
            } else {
                resolve(hash)
            }
        })
    })
}

export const encrypt = async (data) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt((err, salt) => {
            bcrypt.hash(data, salt, (err, hash) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(hash)
                }
            })
        })
    })
}

export const checkCrypt = async (text, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(text, hash, (err, isMatch) => {
            if (err) {
                reject(err)
            } else {
                resolve(isMatch)
            }
        })
    })
}