const fs = require('fs');
const path = require('path');
const crypto = require('crypto');


// 密钥生成路径
const keysDir = path.join(process.cwd(), 'keys');
const privateKeyPath = path.join(keysDir, 'private.pem');
const publicKeyPath = path.join(keysDir, 'public.pem');


// 使用密钥
// const privateKey = fs.readFileSync(path.join(process.cwd(), 'keys/private.pem'), 'utf8');
// const publicKey = fs.readFileSync(path.join(process.cwd(), 'keys/public.pem'), 'utf8');


// 生成 RSA 密钥对
function generateKeys() {
    if (!fs.existsSync(keysDir)) {
        fs.mkdirSync(keysDir);
    }

    if (fs.existsSync(privateKeyPath) && fs.existsSync(publicKeyPath)) {
        return;
    }

    // 生成密钥对
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });

    fs.writeFileSync(privateKeyPath, privateKey);
    fs.writeFileSync(publicKeyPath, publicKey);

    console.log('Keys generated and saved.');
}

generateKeys()
