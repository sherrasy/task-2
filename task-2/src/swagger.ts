type Category = {
  id: number
  name: string
}

type Tag = {
  id: number
  name: string
}

enum Status {
    Available = 'available',
    Pending = 'pending',
    Sold = 'sold',
  }

interface Pet {
  id: number
  category: Category
  name: string
  photoUrls: string[]
  status: Status
  tags: Tag[]
}


const API_LINK = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available'

export const getData = async (): Promise<void> => {
  try {
    const data: Pet[] = await fetch(API_LINK).then((res: Response) => {
      if (!res.ok) {
        throw new Error(`Возникла ошибка: ${res.status}`)
      }
      return res.json()
    })
    console.log(data)
  } catch (error) {
    return Promise.reject(error)
  }
}