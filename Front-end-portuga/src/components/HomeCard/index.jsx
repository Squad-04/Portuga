import { HomeCardUIX } from './styled'

export function HomeCard({ photo }) {
    return (
        <HomeCardUIX>
            <main>
                <img src={photo} />
            </main>
        </HomeCardUIX>
    )
}