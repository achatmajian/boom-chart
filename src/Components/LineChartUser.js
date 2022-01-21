import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChartUser = () => {
  const [chart, setChart] = useState({})
  const username = "bradtraversy"

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json()
        console.log(data)
        setChart(data)
      }
      fetchData()
    }, [])

//   console.log("chart", chart);
  var data = {
    labels: [`Public Repos (${chart.public_repos})`, `Following (${chart.following})`, `Followers (${chart.followers})`, `Public Gists (${chart.public_gists})`],
    datasets: [{
      label: 'Hello',
      data: [chart.public_repos, chart.following, chart.followers, chart.public_gists],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
        display: false
    },
    plugins: {
        title: {
            display: true,
            text: `GitHub User ${username} Data`
        },
        legend: {
            display: false
        }
    }
  }

  return (
    <div>
      <Line
        data={data}
        height={400}
        options={options}

      />
    </div>
  )
}

export default LineChartUser
