import React from 'react';
import * as styles from './video.css';

interface VideoProps {
	videoSrc: string;
	poster?: string;
}

export const Video: React.FC<VideoProps> = ({ videoSrc, poster }) => {
	return (
		<div className={styles.videoContainer}>
			<video className={styles.videoElement} src={videoSrc} poster={poster} loop muted autoPlay />
		</div>
	);
};
