import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import s from './Main.module.css'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'

export const Main = () => {
	let activeStyle = {
		backgroundColor: 'var(--body-color)',
	}
	return (
		<main className={s.main}>
			<section className={`${s.filters} container`}>
				<Fade direction='down' delay={900} triggerOnce>
					<div>
						<ul className={s.content}>
							<NavLink
								to={'/projects'}
								className={s.button}
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								Projects
							</NavLink>
							<NavLink
								to={'/skills'}
								className={s.button}
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								Skills
							</NavLink>
						</ul>
					</div>
				</Fade>

				<Fade delay={1000} triggerOnce>
					<div>
						<div className={s.sections}>
							<Routes>
								<Route path='/' element={<Navigate to={'/projects'} />} />
								<Route path='/projects' element={<Projects />} />
								<Route path='/skills' element={<Skills />} />
							</Routes>
						</div>
					</div>
				</Fade>
			</section>
		</main>
	)
}
