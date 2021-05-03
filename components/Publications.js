import styles from '../styles/Publications.module.css'

const Publications = () => {

    const publications = [
        { 
            title: 'Is Optogenetic Activation of Vglut1-positive AB Low-Threshold Mechanoreceptors Sufficient to Induce Tactile Allodynia in Mice after Nerve Injury?',
            authors: 'Alexander Chamessian, Megumi Matsuda, Michael Young, Michelle Wang, Zhi-Jun Zhang, Di Liu, Brielle Tobin, Zhen-Zhong Xu, Thomas Van de Ven, Ru-Rong Ji',
            id: 1
        },
        {
            title: 'Transcriptional Profiling of Somatostatin Interneurons in the Spinal Dorsal Horn',
            authors: 'Alexander Chamessian, Michael Young, Yawar Qadri, Temugin Berta, Ru-Rong Ji, Thomas Van de Ven',
            id: 2
        },
        {
            title: 'Inactivation of Mechanically Activated Piezo1 Ion Channels Is Determined by the C-Terminal Extracellular Domain and the Inner Pore Helix',
            authors: 'Jason Wu, Michael Young, Amanda H Lewis, Ashley N Martfeld, Breanna Kalmeta, Jorg Grandl',
            id: 3
        },
        {
            title: 'The spectral properties of (-)-epigallocatechin 3-O-gallate (EGCG) fluorescence in different solvents: dependence on solvent polarity',
            authors: 'Vladislav Snitsarev, Michael Young, Ross M.S. Miller, David P. Rotella',
            id: 4
        }
    ]
    
    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>Publications</h1>
            <div className={styles.content}>
                <div className={styles.thumbnailStack}>
                    <img src="/paper-thumbnails/egcg.png" className={styles.thumbnail} alt="profile picture"/>
                    <img src="/paper-thumbnails/inact.png" className={styles.thumbnail} alt="profile picture"/>
                    <img src="/paper-thumbnails/sst.png" className={styles.thumbnail} alt="profile picture"/>
                    <img src="/paper-thumbnails/opto.png" className={styles.thumbnail} alt="profile picture"/>
                </div>

                <div className={styles.pubList}>
                    {publications.map((pub) => (
                        <div className={styles.pub} key={pub.id}>
                            <div className={styles.btns}>
                                <button className={styles.primary}>DOI</button>
                                <button className={styles.secondary}>PDF</button>
                            </div>
                            <div>
                                <h3 className={styles.pubTitle}>
                                    {pub.title}
                                </h3>
                                <p>
                                    {pub.authors}
                                </p>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </div>
     );
}
 
export default Publications;