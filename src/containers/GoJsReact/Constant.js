export const NODE_DATA_ARRAY = [
  {
    key: "Wallet",
    items: [
      { name: "address: string", iskey: true, figure: "Key", color: 'yellow' },
      { name: "balance: integer", iskey: false, figure: "TriangleUp", color: 'pink' }]
  },
  {
    key: "Transaction",
    items: [
      { name: "hash: string", iskey: true, figure: "key", color: 'yellow' },
      { name: "from_address: string", iskey: false, figure: "Key", color: 'pink' },
      { name: "to_address: string", iskey: false, figure: "Border", color: 'pink' },
      { name: "value: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "gas_price: integer", iskey: false, figure: "Ellipse", color: 'pink' },
      { name: "gas: integer", iskey: false, figure: "LineH", color: 'pink' },
      { name: "nonce: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "input: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "block_hash: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "block_number: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "type: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "transaction_index: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "max_fee_per_gas: integer", iskey: false, figure: "Decision", color: 'pink' },
      { name: "max_priorty_fee_per_gas: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "token_transfer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "chain_id: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "function_name: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "transaction_fee: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "gas_fee: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "reciept_status: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "reciept_cumulative_gas_used: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "reciept_root: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "reciept_gas_used: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "reciept_effective_gas_price: integer", iskey: false, figure: "Decision", color: 'pink' },
      { name: "reciept_contract_adress: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "transaction_type: string", iskey: false, figure: "Hexagon", color: 'pink' },

    ]
  },
  {
    key: "Block",
    items: [
      { name: "hash: string", iskey: true, figure: "Decision", color: 'yellow' },
      { name: "number: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "timer: number", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "miner: string", iskey: false, figure: "TriangleUp", color: 'pink' },
      { name: "difficulty: integer", iskey: false, figure: "Decision", color: 'pink' },
      { name: "total_difficulty: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "size: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "gas_used: integer", iskey: false, figure: "TriangleUp", color: 'pink' },
      { name: "base_fee_per_gas: integer", iskey: false, figure: "Decision", color: 'pink' },
      { name: "extra_data: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "parent_hash: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "transactions: set", iskey: false, figure: "TriangleUp", color: 'pink' },
      { name: "sha3_uncles: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "state_root: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "nonce: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "transaction_root: string", iskey: false, figure: "TriangleUp", color: 'pink' },
      { name: "logs_bloom: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "reciept_root: string", iskey: false, figure: "Hexagon", color: 'pink' },
    ]
  },
  {
    key: "TokenTransfer",
    items: [
      { name: "transaction_hash: string", iskey: true, figure: "Decision", color: 'yellow' },
      { name: "from_address: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "to_address: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "block_number: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "value: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "token_address: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "token_type: string (enum)", iskey: false, figure: "Hexagon", color: 'pink' },
    ]
  },
  {
    key: "EventLog",
    items: [
      { name: "name: string", iskey: true, figure: "Decision", color: 'yellow' },
      { name: "address: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "data: json", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "log_index: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "transaction_hash: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "transaction_index: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "block_hash: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "block_number", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "removed: bool", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "topics: json", iskey: false, figure: "Hexagon", color: 'pink' },
    ]
  },
  {
    key: "DataFormat",
    items: [
      { name: "name: string", iskey: true, figure: "Decision", color: 'yellow' },
      { name: "value: string/address/int/bytes", iskey: false, figure: "Hexagon", color: 'pink' },
    ]
  },
  {
    key: "Contract",
    items: [
      { name: "address: string", iskey: true, figure: "Hexagon", color: 'yellow' },
      { name: "fungible_contract: json", iskey: false, figure: "Decision", color: 'pink' },
      { name: "non_fungible_contract: json", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "bytecode: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "contract_creater_address: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "function_signhashes: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "contract_type: string (enum)", iskey: false, figure: "Hexagon", color: 'pink' }
    ]
  },
  {
    key: "FungibleContract",
    items: [
      { name: "name: string", iskey: true, figure: "Key", color: 'yellow' },
      { name: "total_supply: integer", iskey: false, figure: "Decision", color: 'pink' },
      { name: "decimals: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "symbol: string", iskey: false, figure: "Hexagon", color: 'pink' },
    ]
  },
  {
    key: "NonFungibleContract",
    items: [
      { name: "name: string", iskey: true, figure: "Hexagon", color: 'yellow' },
      { name: "token_uri: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "symbol: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "non_fungible_token: json", iskey: false, figure: "Hexagon", color: 'pink' },
    ]
  },
  {
    key: "NonFungibleToken",
    items: [
      { name: "name: string", iskey: true, figure: "Hexagon", color: 'yellow' },
      { name: "image: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "description: string", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "token_id: integer", iskey: false, figure: "Hexagon", color: 'pink' },
      { name: "attributes: json", iskey: false, figure: "Hexagon", color: 'pink' },
    ]
  },
  {
    key: "NFTAttributes",
    items: [
      { name: "trait_type: string", iskey: true, figure: "Hexagon", color: 'yellow' },
      { name: "value: string", iskey: false, figure: "Decision", color: 'pink' },
    ]
  },
  {
    key: "Topic",
    items: [
      { name: "topic_address: string", iskey: true, figure: "Hexagon", color: 'yellow' },
      { name: "index_topic_1: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "index_topic_2: string", iskey: false, figure: "Decision", color: 'pink' },
      { name: "index_topic_3: string", iskey: false, figure: "Decision", color: 'pink' },
    ]
  },
  {
    key: "ContractType",
    items: [
      { name: "Fungible", iskey: true, figure: "Hexagon", color: 'yellow' },
      { name: "Non-Fungible", iskey: false, figure: "Decision", color: 'pink' },
      { name: "Other", iskey: false, figure: "Decision", color: 'pink' },
    ]
  },
]

export const LINK_DATA_ARRAY = [
  { from: "Wallet", to: "Transaction", text: "1", toText: "0..1" },
  { from: "Block", to: "Transaction", text: "1", toText: "0..N" },
  { from: "Transaction", to: "TokenTransfer", text: "1", toText: "0..N" },
  { from: "Transaction", to: "EventLog", text: "1", toText: "0..N" },
  { from: "Topic", to: "EventLog", text: "1", toText: "1" },
  { from: "EventLog", to: "DataFormat", text: "1", toText: "1" },
  { from: "Transaction", to: "Contract", text: "1", toText: "0..1" },
  { from: "FungibleContract", to: "Contract", text: "0..N", toText: "1" },
  { from: "NonFungibleContract", to: "Contract", text: "0..1", toText: "1" },
  { from: "NonFungibleToken", to: "NonFungibleContract", text: "1", toText: "0..N" },
  { from: "NonFungibleToken", to: "NFTAttributes", text: "N", toText: "1" },
  { from: "Contract", to: "ContractType", text: "1", toText: "1" },
]