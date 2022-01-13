require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember exchange include kitchen sure slim'; 
let testAccounts = [
"0x443e262428732595d7baaa8ac651bc94332962df768ecd0ff8a56aa41755463b",
"0x133e1b70427d349e69624ff0bdb8f22223d7d5507c4f888edcaace549a431ebd",
"0x51ae694925cc0c5ccc565253292b417e73afde4c7591c7b4c2d506da88d66fe4",
"0x96c138f298b010be65ca4c2fb4ae4f1698888aa1d5214c4d7f6f028deecf5728",
"0x75216cb1442e1ca1be7c6ed9f42d9bf85dc9fac800bf165c230cbdb0296bca4c",
"0xc9bcba2fe15bc018e970fc07b9eee7e0098f3f86cde9e1f5820bdebbb7bdacc3",
"0x1ad582abdf5829673b58838b57deede2dce155b7efd6141b712a8a84197234cd",
"0x653591ce5295fa94e29688cec5ceaf10cdd8fa3d95358f63976d2d0de301d520",
"0x1783fc2a76889ee7a8b5a0fbefc4f9ab621e7f05406360c9da5f91485f6f739a",
"0x16cd08ad989ee4500abfc2d6239e1948a3b5380f8843152272170b8dde8d534f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

