import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
      <div className="flex flex-wrap gap-3">
        <a href="mailto:maazbinfazal378@gmail.com" className="inline-block">
          <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/maazbinfazal/" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
        </a>
        <a href="https://leetcode.com/u/MaazBinFazal/" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" alt="LeetCode" />
        </a>
        <a href="https://lablab.ai/u/@maaz_bin_fazal90" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/LabLab.ai-000000?style=for-the-badge" alt="LabLab" />
        </a>
        <a href="http://discordapp.com/users/1403011331325432029" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
        </a>
      </div>
    </section>
  )
}
