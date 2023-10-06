module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          crypto: 'react-native-crypto',
          stream: 'stream-browserify',
          buffer: '@craftzdog/react-native-buffer',
          argon2: 'react-native-argon2',
          zlib: 'browserify-zlib',
        },
      },
    ],
    '@babel/plugin-syntax-import-assertions',
  ],
};
