type GameName = {
  catid: number
  category_name: string
  game_url: string
};

type CategoryData = {
  id: number
  game_id: string
  game_hash: string
  game_ip: string
  game_name: string
  game_alias: string
  game_port: string
  second_per_issue: string
  total_num_issue: string
  game_status: string
  stop_time: string
  start_time: string
  rand_num_type: string
  category_id: string
  command: string
  notify: string
  sessionId: string
  data_url: string
}

type GameDraw = {
  draw_date: Date
  draw_time: Date
  draw_number: string
  date_created: Date
  draw_count: number
  get_time: Date
};

interface GameContextType {
  gameNamesData: GameName[]
  setGameNamesData: React.Dispatch<React.SetStateAction<GameName[]>>
  gameCategory: CategoryData[]
  setGameCategory: React.Dispatch<React.SetStateAction<CategoryData[]>>
  gameDraws: GameDraw[]
  setGameDraws: React.Dispatch<React.SetStateAction<GameDraw[]>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  hidePage: boolean
  setHidePage: React.Dispatch<React.SetStateAction<boolean>>
}

