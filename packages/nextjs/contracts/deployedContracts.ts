/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    EASOnboarding: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_attestation",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "_studentAddress",
              type: "address",
            },
          ],
          name: "addAttestation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "attestationProfile",
          outputs: [
            {
              internalType: "uint256",
              name: "studentLevel",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "eventsCompleted",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_closingTimestamp",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_eventName",
              type: "string",
            },
            {
              internalType: "string",
              name: "_eventDescription",
              type: "string",
            },
            {
              internalType: "string",
              name: "_mentorName",
              type: "string",
            },
          ],
          name: "createEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "eventIdCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "events",
          outputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "closingTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "attendeeCount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "eventName",
              type: "string",
            },
            {
              internalType: "string",
              name: "eventDescription",
              type: "string",
            },
            {
              internalType: "string",
              name: "mentorName",
              type: "string",
            },
            {
              internalType: "address",
              name: "mentorAddress",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "overrideClosingTimestamp",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_level",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "_msgHash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "getAttested",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_messageHash",
              type: "bytes32",
            },
          ],
          name: "getEthSignedMessageHash",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_messageHash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isVerified",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_ethSignedMessageHash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "recoverSigner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "sig",
              type: "bytes",
            },
          ],
          name: "splitSignature",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "studentEventMap",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_res",
              type: "bool",
            },
          ],
          name: "toggleOverrideEventFlag",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        attestationProfile: "contracts/storage/EASOnboardingStorage.sol",
        eventIdCounter: "contracts/storage/EASOnboardingStorage.sol",
        events: "contracts/storage/EASOnboardingStorage.sol",
        studentEventMap: "contracts/storage/EASOnboardingStorage.sol",
      },
    },
  },
  11155420: {
    EASOnboarding: {
      address: "0x4CE6EC617d7DebC5c1CF3386E5bf0927cACFFf8B",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_attestation",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "_studentAddress",
              type: "address",
            },
          ],
          name: "addAttestation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "attestationProfile",
          outputs: [
            {
              internalType: "uint256",
              name: "studentLevel",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "eventsCompleted",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_closingTimestamp",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_eventName",
              type: "string",
            },
            {
              internalType: "string",
              name: "_eventDescription",
              type: "string",
            },
            {
              internalType: "string",
              name: "_mentorName",
              type: "string",
            },
          ],
          name: "createEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "eventIdCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "events",
          outputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "closingTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "attendeeCount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "eventName",
              type: "string",
            },
            {
              internalType: "string",
              name: "eventDescription",
              type: "string",
            },
            {
              internalType: "string",
              name: "mentorName",
              type: "string",
            },
            {
              internalType: "address",
              name: "mentorAddress",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "overrideClosingTimestamp",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_level",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "_msgHash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "getAttested",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_messageHash",
              type: "bytes32",
            },
          ],
          name: "getEthSignedMessageHash",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_messageHash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isVerified",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_ethSignedMessageHash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "recoverSigner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "sig",
              type: "bytes",
            },
          ],
          name: "splitSignature",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "studentEventMap",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_res",
              type: "bool",
            },
          ],
          name: "toggleOverrideEventFlag",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        attestationProfile: "contracts/storage/EASOnboardingStorage.sol",
        eventIdCounter: "contracts/storage/EASOnboardingStorage.sol",
        events: "contracts/storage/EASOnboardingStorage.sol",
        studentEventMap: "contracts/storage/EASOnboardingStorage.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
