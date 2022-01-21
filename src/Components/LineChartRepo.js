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
  const repo = "vanillawebprojects"

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`https://api.github.com/repos/${username}/${repo}`)
        const data = await res.json()
        console.log(data)
        setChart(data)
      }
      fetchData()
    }, [])
    

//   console.log("chart", chart);
  var data = {
    labels: [`Forks (${chart.forks_count})`, `Stars (${chart.stargazers_count})`, `Subscribers (${chart.subscribers_count})`, `Open Issues (${chart.open_issues_count})`],
    datasets: [{
      label: 'Hello',
      data: [chart.forks_count, chart.stargazers_count, chart.subscribers_count, chart.open_issues_count],
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
    plugins: {
        title: {
            display: true,
            text: `GitHub Repo ${repo} Data for User ${username}`
        },
        legend: {
            display: false,
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
