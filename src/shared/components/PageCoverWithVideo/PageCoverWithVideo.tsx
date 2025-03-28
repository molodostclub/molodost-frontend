import { FC } from 'react';

import { MobileHeaderMenu } from '@shared/components';
import * as styles from './PageCoverWithVideo.css';

type Props = {
    src?: string | null;
    poster?: string;
    mobileMenu?: boolean;
}

export const PageCoverWithVideo: FC<Props> = ({
    src,
    poster,
    mobileMenu = true,
}) => {
    return (
        <div className={styles.container}>
            {!!src ? (
                <div className={styles.videoWrap}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={poster}
                        className={styles.video}
                    >
                        <source src={src} type='video/mp4'/>
                    </video>
                </div>
            ) : (
                <div className={styles.cover} />
            )}

            {mobileMenu && <MobileHeaderMenu />}
        </div>
    );
};