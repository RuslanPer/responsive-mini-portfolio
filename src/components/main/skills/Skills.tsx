import React from 'react'
import s from './Skills.module.css'

export const Skills = () => {
	const skills = {
		frontend: {
			first: [
				{ name: 'React', level: 'Intermediate' },
				{ name: 'Redux', level: 'Intermediate' },
				{ name: 'Redux Toolkit', level: 'Intermediate' },
				{ name: 'JavaScript', level: 'Intermediate' },
				{ name: 'TypeScript', level: 'Intermediate' },
				{ name: 'Material UI', level: 'Intermediate' },
				{ name: 'Ant Design', level: 'Intermediate' },
				{ name: 'React Native', level: 'Basic' },
				{ name: 'Websocket', level: 'Basic' },
			],
			second: [
				{ name: 'Redux thunk', level: 'Intermediate' },
				{ name: 'Redux saga', level: 'Basic' },
				{ name: 'HTML', level: 'Advanced' },
				{ name: 'CSS', level: 'Advanced' },
				{ name: 'SCSS/SASS/LESS', level: 'Advanced' },
				{ name: 'Gulp', level: 'Intermediate' },
				{ name: 'Bootstrap', level: 'Basic' },
				{ name: 'Git', level: 'Intermediate' },
			],
		},
		backend: {
			first: [
				{ name: 'Node.js', level: 'Basic' },
				{ name: 'Express', level: 'Basic' },
				{ name: 'Firebase', level: 'Basic' },
				{ name: 'Postman', level: 'Basic' },
			],
			second: [
				{ name: 'Python', level: 'Basic' },
				{ name: 'Django', level: 'Basic' },
			],
		},
	}

	return (
		<div className={`${s.content} grid`}>
			<div className={s.area}>
				<h3 className={s.title}>Frontend developer</h3>
				<div className={s.box}>
					<div className={s.group}>
						{skills.frontend.first.map(sk => (
							<div className={s.data}>
								<i className='ri-checkbox-circle-line'></i>
								<div>
									<h3 className={s.name}>{sk.name}</h3>
									<span className={s.level}>{sk.level}</span>
								</div>
							</div>
						))}
					</div>

					<div className={s.group}>
						{skills.frontend.second.map(sk => (
							<div className={s.data}>
								<i className='ri-checkbox-circle-line'></i>
								<div>
									<h3 className={s.name}>{sk.name}</h3>
									<span className={s.level}>{sk.level}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={s.area}>
				<h3 className={s.title}>Backend developer</h3>
				<div className={s.box}>
					<div className={s.group}>
						{skills.backend.first.map(sk => (
							<div className={s.data}>
								<i className='ri-checkbox-circle-line'></i>
								<div>
									<h3 className={s.name}>{sk.name}</h3>
									<span className={s.level}>{sk.level}</span>
								</div>
							</div>
						))}
					</div>

					<div className={s.group}>
						{skills.backend.second.map(sk => (
							<div className={s.data}>
								<i className='ri-checkbox-circle-line'></i>
								<div>
									<h3 className={s.name}>{sk.name}</h3>
									<span className={s.level}>{sk.level}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
