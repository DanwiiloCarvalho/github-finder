import './styles.css';

export function FollowCard() {
    return (
        <div className='follow'>
            <div className="followers">
                <h3>Seguidores:</h3>
                <div className="amount">4960</div>
            </div>
            <div className="vertical-line"></div>
            <div className="following">
                <h3>Seguindo:</h3>
                <div className="amount">6</div>
            </div>
        </div>
    )
}