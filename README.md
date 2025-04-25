# Proof of Med

## Overview
**Proof of Med** is a decentralized science solution that ensures the authenticity of medical prescriptions in online pharmacy transactions using **Zero-Knowledge Proofs (ZKPs)**. By leveraging **Noir for circuit design**, **Sindri for proof generation**, **zkVerify for on-chain verification**, and **Educhain Testnet for blockchain execution**, Proof of Med provides a trustless system that mitigates fraudulent prescriptions while maintaining patient privacy.

🧬 **A DeSci (Decentralized Science) project empowering medical trust with privacy-preserving cryptography.**

## **Key Features**
- **Privacy-Preserving Prescription Verification**: Validates prescriptions without exposing sensitive patient data.
- **Decentralized & Secure**: Uses **Educhain Testnet** for verifiable and immutable prescription records.
- **Scalable Proof Generation**: Utilizes **Sindri's proof market** to offload computationally intensive ZKP generation.
- **Seamless Integration for Pharmacies**: Ensures only legitimate prescriptions are fulfilled, preventing unauthorized medication orders.

## **Technical Stack**
| Component               | Technology |
|------------------------|------------|
| **ZK Circuit Design**  | Noir |
| **Proof Generation**   | Sindri Proof Market |
| **Proof Verification** | zkVerify Attestation |
| **Smart Contract**     | Solidity (Educhain Testnet) |
| **Frontend**           | Next.js, Ethers.js |

## Contract Information
- **Network:** Educhain Testnet
- **Contract Address:** `0xD4f9d691427F63945293627Fc068828492555892`

## How It Works
1. **Prescription Input**
   - Doctors input prescription details, including patient information, medication name, dosage, and other relevant details.

2. **ZK Circuit Execution**
   - A **Noir-based ZK circuit** is used to validate the prescription’s integrity without revealing private patient data.

3. **Proof Generation**
   - **Sindri** generates a ZK proof for the prescription data, ensuring scalability and efficiency in the verification process.

4. **On-Chain Proof Verification**
   - The ZK proof is submitted to **ZKVerify**, which checks the proof’s validity before allowing the prescription to proceed.

5. **Order Fulfillment**
   - Once verified, the pharmacy processes the order, ensuring that only legitimate prescriptions lead to medication dispensing.

## Smart Contract Roles
- **Owner** – Administers the contract and assigns roles.
- **Doctor** – Authorized to issue prescriptions.
- **Pharmacy** – Manages inventory and fulfills orders based on verified prescriptions.

## Future Roadmap
- **Integration with IPFS** for prescription storage.
- **Onboarding real-world pharmacies** for pilot testing.
- **Enhancing ZK circuit efficiency** for faster proof generation.

## **Contributors**
- **[Abhishek Yadav]** - Developer & Architect

## License
MIT License

---

🚀 **Proof of Med brings security, privacy, and decentralization to online prescriptions.**

🔗 Follow us on Twitter: [@ProofOfMed](https://twitter.com/ProofMed)
