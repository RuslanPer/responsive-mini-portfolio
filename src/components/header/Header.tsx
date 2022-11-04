import React from 'react'
import { Fade } from 'react-awesome-reveal'
import ava from '../../common/img/ruslan.png'
import s from './Header.module.css'

export const Header = () => {
	return (
		<header className={`${s.profile} container`}>
			<div className={`${s.container} grid`}>
				<div className={s.data}>
					<Fade direction='down' className={s.border} triggerOnce>
						<div>
							<div className={s.ruslan}>
								<img src={ava} alt='ava' />
							</div>
						</div>
					</Fade>

					<Fade cascade direction='down' delay={500} triggerOnce>
						<h2 className={s.name}>Ruslan Pershin</h2>
					</Fade>

					<Fade cascade direction='down' delay={600} triggerOnce>
						<h3 className={s.profession}>Frontend developer</h3>
					</Fade>

					<Fade direction='down' delay={700} triggerOnce>
						<ul className={s.social}>
							<a
								className={s.link}
								href='mailto:ruslan.pershin98@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								<i className='ri-mail-line'></i>
							</a>
							<a
								className={s.link}
								href='https://www.linkedin.com/in/ruslanpershin/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='ri-linkedin-box-line'></i>
							</a>
							<a
								className={s.link}
								href='https://github.com/RuslanPer'
								target='_blank'
								rel='noreferrer'
							>
								<i className='ri-github-line'></i>
							</a>
						</ul>
					</Fade>
				</div>

				<div className={`${s.info} grid`}>
					<Fade cascade direction='down' delay={700} triggerOnce>
						<div className={s.group}>
							<h3 className={s.number}>2</h3>
							<p className={s.description}>
								Years of <br /> work
							</p>
						</div>
					</Fade>

					<Fade direction='down' delay={700} triggerOnce>
						<div className={s.group}>
							<h3 className={s.number}>10</h3>
							<p className={s.description}>
								Completed <br /> projects
							</p>
						</div>
					</Fade>

					<Fade cascade direction='down' delay={700} triggerOnce>
						<div className={s.group}>
							<h3 className={s.number}>+1000</h3>
							<p className={s.description}>
								Lines of <br /> code
							</p>
						</div>
					</Fade>
				</div>

				<Fade direction='down' delay={800} triggerOnce>
					<div className={s.buttons}>
						<a
							className='button'
							href='https://drive.google.com/file/d/1Ub79O0ozrf_WHdar_63I7H6zF9RS23uO/view?usp=share_link'
							target='_blank'
							rel='noreferrer'
						>
							Download CV <i className='ri-download-line'></i>
						</a>

						<div className={s.buttonsSmall}>
							<a
								href='https://wa.me/+79991565712'
								className={`button ${s.buttonSmall} ${s.buttonGray}`}
								target='_blank'
								rel='noreferrer'
							>
								<i className='ri-whatsapp-line'></i>
							</a>
							<a
								href='https://t.me/ruslanpershin'
								className={`button ${s.buttonSmall} ${s.buttonGray}`}
								target='_blank'
								rel='noreferrer'
							>
								<i className='ri-telegram-line'></i>
							</a>
						</div>
					</div>
				</Fade>
			</div>
		</header>
	)
}
