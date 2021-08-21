import { useState, useEffect, useRef } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import CONFIG from './config.json'

import styles from './chart.module.css'

const Charts = ({ blok }) => {
  const [inView, setInView] = useState(false)
  const ref = useRef()
  const isInViewport = (offset = 600) => {
    const top = ref.current.getBoundingClientRect().top
    const trueResult = top + 400 <= window.innerHeight
    if (trueResult) {
      setInView(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isInViewport)
    return () => {
      window.removeEventListener('scroll', isInViewport)
    }
  }, [])

  const options = {
    indexAxis: blok.turnY ? 'y' : 'x',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  const data = {
    labels: blok.year
      ? CONFIG.year
      : blok.country
      ? CONFIG.countries
      : blok.donut
      ? CONFIG.time
      : [],
    datasets: [
      {
        label: 'Porcentaje de encuestrados',
        backgroundColor: blok.donut ? CONFIG.timeColors : '#095b90',
        borderColor: blok.donut ? CONFIG.timeColors : 'rgb(255, 99, 132)',
        data: blok.year
          ? CONFIG.yearsData
          : blok.country
          ? CONFIG.countriesData
          : blok.donut
          ? CONFIG.timeData
          : [],
      },
    ],
  }

  let dataChart = <Bar data={data} options={options} />
  if (blok.donut) {
    dataChart = (
      <div className={styles.donutWrapper}>
        <Doughnut data={data} options={options} />
      </div>
    )
  }
  const content = inView ? dataChart : null

  return (
    <div ref={ref} className={styles.chartContainer}>
      <div className={styles.chartTextWrapper}>
        <h2>{blok.title}</h2>
        <p>{blok.text}</p>
      </div>
      <div className={styles.chartDataWrapper}>{content}</div>
    </div>
  )
}

export default Charts
