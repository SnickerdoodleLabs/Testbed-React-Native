/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  ChainId,
  IConfigOverrides,
  URLString,
  ProviderUrl,
} from '@snickerdoodlelabs/objects';
import {SnickerdoodleWrapper} from '@snickerdoodlelabs/mobile-integration';

export const coreConfig = {
  controlChainId: ChainId(43113),
  supportedChains: [
    ChainId(43113),
    ChainId(1),
    ChainId(43114),
    ChainId(137),
    ChainId(56),
    ChainId(100),
    ChainId(1284),
    ChainId(42161),
    ChainId(592),
  ],
  ipfsFetchBaseUrl: URLString('https://ipfs-gateway.snickerdoodle.com/ipfs/'),
  defaultInsightPlatformBaseUrl: URLString(
    'https://insight-api.snickerdoodle.com/v0/',
  ),
  requestForDataCheckingFrequency: 60000,
  accountIndexingPollingIntervalMS: 60000,
  accountBalancePollingIntervalMS: 60000,
  accountNFTPollingIntervalMS: 60000,
  dataWalletBackupIntervalMS: 60000,
  heartbeatIntervalMS: 60000,
  alchemyApiKeys: {
    Arbitrum: '_G9cUGHUQqvD2ro5zDaTAFXeaTcNgQiF',
    Astar: 'Tk2NcwnHwrmRvzZCkqgSr6fOYIgH7xh7',
    Mumbai: 'UA7tIJ6CdCE1351h24CQUE-MNCIV3DSf',
    Optimism: 'f3mMgv03KKiX8h-pgOc9ZZyu7F9ECcHG',
    Polygon: 'el_YkQK0DMQqqGlgXPO5gm8g6WmpdNfX',
    Solana: 'pci9xZCiwGcS1-_jWTzi2Z1LqAA7Ikeg',
    SolanaTestnet: 'Fko-iHgKEnUKTkM1SvnFMFMw1AvTVAtg',
  },
  etherscanApiKeys: {
    Ethereum: '6GCDQU7XSS8TW95M9H5RQ6SS4BZS1PY8B7',
    Polygon: 'G4XTF3MERFUKFNGANGVY6DTMX1WKAD6V4G',
    Avalanche: 'EQ1TUDT41MKJUCBXNDRBCMY4MD5VI9M9G1',
    Binance: 'KRWYKPQ3CDD81RXUM5H5UMWVXPJP4C29AY',
    Moonbeam: 'EE9QD4D9TE7S7D6C8WVJW592BGMA4HYH71',
    Optimism: 'XX9XPVXCBA9VCIQ3YBIZHET5U3BR1DG8B3',
    Arbitrum: 'CTJ33WVF49E4UG6EYN6P4KSFC749JPYAFV',
    Gnosis: 'J7G8U27J1Y9F88E1E56CNNG2K3H98GF4XE',
    Fuji: 'EQ1TUDT41MKJUCBXNDRBCMY4MD5VI9M9G1',
  },
  covalentApiKey: 'ckey_ee277e2a0e9542838cf30325665',
  moralisApiKey:
    'aqy6wZJX3r0XxYP9b8EyInVquukaDuNL9SfVtuNxvPqJrrPon07AvWUmlgOvp5ag',
  nftScanApiKey: 'lusr87vNmTtHGMmktlFyi4Nt',
  poapApiKey:
    'wInY1o7pH1yAGBYKcbz0HUIXVHv2gjNTg4v7OQ70hykVdgKlXU3g7GGaajmEarYIX4jxCwm55Oim7kYZeML6wfLJAsm7MzdvlH1k0mKFpTRLXX1AXDIwVQer51SMeuQm',
  ankrApiKey:
    '74bbdfc0dea96f85aadde511a4fe8905342c864202f890ece7d0b8d1c60df637',
  primaryInfuraKey: '72827ccd538446f2a20e35a632664c52',
  iframeURL: URLString('https://iframe.snickerdoodle.com'),
  defaultGoogleCloudBucket: 'prod-qkppf-sdl-dw',
  discordOverrides: {
    oauthRedirectUrl: URLString(
      'https://datawallet.snickerdoodle.com/data-dashboard/social-media-data',
    ),
  },
  dropboxRedirectUri: 'https://datawallet.snickerdoodle.com/settings/storage',
  secondaryInfuraKey: '',
  enableBackupEncryption: true,
} as IConfigOverrides;

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SnickerdoodleWrapper configs={coreConfig}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SnickerdoodleWrapper>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
