import React, { useEffect, useState } from 'react';
import { serviceDogBreeds, serviceDogBreedsSearch } from '../../service'
import { IBreedData } from '../../service/types'
import Card from '../../components/Card'
import './styles.css'
import Header from '../../components/Header'

export const App: React.FC = () => {
  const [data, setData] = useState<IBreedData[]>([])

  useEffect(() => {
    handleData()
  },[])

  const handleData = async  () => {
    await serviceDogBreeds().then((r) => {setData(r)})
}

//  const result = serviceDogBreedsSearch('pit')
//  result.then((r)=> {console.log(r)})

  return (
    <div className="home">
      <Header text="The Dog API" />
      <div>
        {data.map((obj)=> (
          <Card 
            img={obj.image.url} 
            name={obj.name}
            origin={obj.origin}
            temperament={obj.temperament}
            life_span={obj.life_span}
            height={obj.height.metric}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
