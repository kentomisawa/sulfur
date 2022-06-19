# Sulfur Network

Sulfur Network is a compliance and verification state sharing network. Anyone can create rules and anyone can verify. It is very hard to define the standard interface for compliance because of its variety of forms, so Sulfur Network stores legal states for users to refer to easier.

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

## How it work

Anyone can create rules and anyone can verify anything they want to. It's up to users to access which jurisdiction of what rules of who verifies who complies. Because this real world is very complicated; decentralized compliance networks must be lightweight.

### Verifiers

Verifiers might be regulated organizations or users who manage a community. They verify who follows what compliance.

### Compliance

Regulations belong to a jurisdiction. Rules might be related to others. They can have relation edges to express relations.

### Users

Users can share the states of regulations. VASPs (Virtual Asset Service Providers) are often regulated, but they can reduce management costs by sharing the states.
