import React from 'react'
import s from './Projects.module.css'
import project1Img from '../../../common/img/project1.jpg'
import project2Img from '../../../common/img/project2.jpg'
import project3Img from '../../../common/img/project3.jpg'
import project4Img from '../../../common/img/project4.jpg'
import project5Img from '../../../common/img/project5.jpg'

export const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'Learning cards',
			description:
				"It's team-work project. Our team used TS, React, Redux, Rest-api, AXIOS, Material UI, ESLint, Prettier and more.",
			image: project1Img,
			gitHub: 'https://github.com/Rumata-SL/Learning-cards',
			link: 'https://rumata-sl.github.io/Learning-cards/',
		},
		{
			id: 2,
			title: 'Todolist',
			description:
				"It's my ToDo-application! I used TS, React, Redux Toolkit, Rest-api, AXIOS and more.",
			image: project2Img,
			gitHub: 'https://github.com/RuslanPer/todolist-ts',
			link: 'https://ruslanper.github.io/todolist-ts',
		},
		{
			id: 3,
			title: 'Social Network',
			description:
				"It's my social network project! I use in the this project React, Redux, TypeScript, Rest-api, AXIOS and more.",
			image: project3Img,
			gitHub: 'https://github.com/RuslanPer/social-network',
			link: 'https://ruslanper.github.io/social-network',
		},
		{
			id: 4,
			title: 'Products list',
			description:
				"It's mini shop application. I used React, Redux Toolkit, TypeScript, Firebase, Ant design.",
			image: project4Img,
			gitHub: 'https://github.com/RuslanPer/products-list-test',
			link: 'https://products-list-test.vercel.app/',
		},
		{
			id: 5,
			title: 'Information portal',
			description:
				"It's my information portal for the marvel universe! I used JS, React, SCSS and more.",
			image: project5Img,
			gitHub: 'https://github.com/RuslanPer/marvel',
			link: 'https://marvel-information-portal.herokuapp.com/',
		},
	]

	return (
		<div className={`${s.content} grid`}>
			{projects.map(el => (
				<article className={s.card} key={el.id}>
					<img src={el.image} alt='card' className={s.img} />

					<div className={s.modal}>
						<div>
							<span className={s.subtitle}>{el.description}</span>
							<h3 className={s.title}>{el.title}</h3>
							<div className={s.buttons}>
								<a
									href={el.link}
									className={`${s.button} button`}
									target='_blank'
									rel='noreferrer'
								>
									<i className='ri-links-line'></i>
								</a>
								<a
									href={el.gitHub}
									className={`${s.button} button`}
									target='_blank'
									rel='noreferrer'
								>
									<i className='ri-github-line'></i>
								</a>
							</div>
						</div>
					</div>
				</article>
			))}
		</div>
	)
}
