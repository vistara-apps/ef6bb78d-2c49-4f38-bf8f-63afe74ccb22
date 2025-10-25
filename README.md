# MemoryLink - Base Mini App

Turn life moments into collectible memories—no crypto knowledge required.

## Features

- **One-Link Event Collectibles**: Instant NFT minting with HTTP-native payments
- **Creator Studio Lite**: Design and launch drops in under 5 minutes
- **QR Code Distribution**: Physical-to-digital bridge for live events
- **Social Proof Gallery**: Farcaster-integrated collectible showcase
- **HTTP-Native Checkout**: Credit card and USDC payments via x402 protocol

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Payments**: x402 Protocol for HTTP-native transactions
- **Wallet**: RainbowKit + Wagmi for Web3 connectivity
- **Social**: Farcaster MiniKit integration
- **Styling**: Tailwind CSS with BASE theme
- **Storage**: IPFS for NFT metadata

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your API keys
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/       # Reusable UI components
├── page.tsx         # Home page
├── layout.tsx       # Root layout with providers
├── globals.css      # Global styles and theme
└── loading.tsx      # Loading states

.well-known/
└── farcaster.json   # Farcaster Frame manifest
```

## Design System

The app uses the BASE theme with:
- Dark blue background (#0a1628)
- Base blue accents (#0052ff)
- Rounded borders and modern shadows
- Mobile-first responsive design

## Key Integrations

- **Base MiniKit**: Farcaster Frame integration
- **OnchainKit**: Base blockchain utilities
- **RainbowKit**: Wallet connection UI
- **x402 Protocol**: HTTP-native payments

## License

MIT
