export const NODE_DATA_ARRAY = [
  {
    key: "Wallet",
    items: [
      { name: "address: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "balance: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' }]
  },
  {
    key: "Transaction",
    items: [
      { name: "hash: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "from_address: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "to_address: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "value: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "gas_price: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "gas: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "nonce: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "input: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "block_hash: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "block_number: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "type: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "transaction_index: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "max_fee_per_gas: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "max_priorty_fee_per_gas: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "token_transfer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "chain_id: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "function_name: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "transaction_fee: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "gas_fee: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "reciept_status: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "reciept_cumulative_gas_used: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "reciept_root: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "reciept_gas_used: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "reciept_effective_gas_price: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "reciept_contract_adress: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "transaction_type: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },

    ]
  },
  {
    key: "Block",
    items: [
      { name: "hash: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "number: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "timer: number", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "miner: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "difficulty: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "total_difficulty: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "size: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "gas_used: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "base_fee_per_gas: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "extra_data: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "parent_hash: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "transactions: set", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "sha3_uncles: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "state_root: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "nonce: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "transaction_root: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "logs_bloom: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "reciept_root: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "TokenTransfer",
    items: [
      { name: "transaction_hash: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "from_address: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "to_address: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "block_number: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "value: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "token_address: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "token_type: string (enum)", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "EventLog",
    items: [
      { name: "name: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "address: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "data: json", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "log_index: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "transaction_hash: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "transaction_index: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "block_hash: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "block_number", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "removed: bool", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "topics: json", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "DataFormat",
    items: [
      { name: "name: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "value: string/address/int/bytes", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "Contract",
    items: [
      { name: "address: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "fungible_contract: json", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "non_fungible_contract: json", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "bytecode: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "contract_creater_address: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "function_signhashes: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "contract_type: string (enum)", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' }
    ]
  },
  {
    key: "FungibleContract",
    items: [
      { name: "name: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "total_supply: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "decimals: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "symbol: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "NonFungibleContract",
    items: [
      { name: "name: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "token_uri: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "symbol: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "non_fungible_token: json", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "NonFungibleToken",
    items: [
      { name: "name: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "image: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "description: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "token_id: integer", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "attributes: json", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "NFTAttributes",
    items: [
      { name: "trait_type: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "value: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "Topic",
    items: [
      { name: "topic_address: string", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "index_topic_1: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "index_topic_2: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "index_topic_3: string", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
  {
    key: "ContractType",
    items: [
      { name: "Fungible", iskey: true, figure: "Key", fillColor: 'white', strokeColor: 'black' },
      { name: "Non-Fungible", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
      { name: "Other", iskey: false, figure: "Diamond", fillColor: 'white', strokeColor: '#FFB6C1' },
    ]
  },
]


export const ENTITY_MAPPING = {
  'Many': 'n',
  'OneAndOnlyOne': '1',
  'OneOrMany': '1..*',
  'ZeroOrOne': '0..1',
  'ZeroOrMany': '0..*',
  'Range': 'n..m'
}

export const ARROW_MAPPING = {
  'Zero': 'Circle',
  'One': 'Line',
  'Many': 'BackwardFork',
  'OneAndOnlyOne': 'DoubleLine',
  'OneOrMany': 'BackwardLineFork',
  'ZeroOrOne': 'LineCircle',
  'ZeroOrMany': 'BackwardCircleFork'
}

export const LINK_DATA_ARRAY = [
  {
    from: "Wallet",
    to: "Transaction",
    toText: "0..1",
    toArrow: ARROW_MAPPING.ZeroOrOne,
    text: "1",
    fromArrow: ARROW_MAPPING.One,
  },
  {
    from: "Block",
    to: "Transaction",
    toText: "0..N",
    toArrow: ARROW_MAPPING.ZeroOrMany,
    text: "1",
    fromArrow: ARROW_MAPPING.One
  },
  {
    from: "Transaction",
    to: "TokenTransfer",
    toText: "0..N",
    toArrow: ARROW_MAPPING.ZeroOrMany,
    text: "1",
    fromArrow: ARROW_MAPPING.One
  },
  {
    from: "Transaction",
    to: "EventLog",
    toText: "0..N",
    toArrow: ARROW_MAPPING.ZeroOrMany,
    text: "1",
    fromArrow: ARROW_MAPPING.One
  },
  {
    from: "Topic",
    to: "EventLog",
    toText: "1",
    toArrow: ARROW_MAPPING.One,
    text: "1",
    fromArrow: ARROW_MAPPING.One
  },
  {
    from: "EventLog",
    to: "DataFormat",
    toText: "1",
    toArrow: ARROW_MAPPING.One,
    text: "1",
    fromArrow: ARROW_MAPPING.One
  },
  {
    from: "Transaction",
    to: "Contract",
    toText: "0..1",
    toArrow: ARROW_MAPPING.ZeroOrOne,
    text: "1",
    fromArrow: ARROW_MAPPING.One
  },
  {
    from: "FungibleContract",
    to: "Contract",
    toText: "1",
    toArrow: ARROW_MAPPING.One,
    text: "0..N",
    fromArrow: ARROW_MAPPING.ZeroOrMany
  },
  {
    from: "NonFungibleContract",
    to: "Contract",
    toText: "1",
    toArrow: ARROW_MAPPING.One,
    text: "0..1",
    fromArrow: ARROW_MAPPING.ZeroOrOne
  },
  {
    from: "NonFungibleToken",
    to: "NonFungibleContract",
    toText: "0..N",
    toArrow: ARROW_MAPPING.ZeroOrMany,
    text: "1",
    fromArrow: ARROW_MAPPING.One
  },
  {
    from: "NonFungibleToken",
    to: "NFTAttributes",
    toText: "1",
    toArrow: ARROW_MAPPING.One,
    text: "N",
    fromArrow: ARROW_MAPPING.Many
  },
  {
    from: "Contract",
    to: "ContractType",
    text: "1",
    toText: "1",
    toArrow: ARROW_MAPPING.One,
    fromArrow: ARROW_MAPPING.One
  },
]