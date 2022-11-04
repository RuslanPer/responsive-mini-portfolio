import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={`${s.footer} container`}>
			<span className={s.copy}>&#169; Ruslan. All rigths reserved</span>
		</footer>
	)
}
