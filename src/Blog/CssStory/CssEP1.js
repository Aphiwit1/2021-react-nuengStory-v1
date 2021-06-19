import './CssEP1.css'
function CssEP1() {
    return (
        <div className="blog-content-container">

            <div className="blog-content">
                <div className="text-header">How to add Cascadia Font in VS Code</div>
                <div className="cover-img"><img src="https://dl.dropboxusercontent.com/s/7c6wu7iqz4ww8et/cascadia.jpg?dl=0"></img></div>
                <div className="text-topic">1.Download Cascadia font</div>
                <div className="text-content">Click this link to download font</div>
                <div className="text-content">https://github.com/microsoft/cascadia-code/releases</div>
                <div className="text-content">See in asset and download zip file</div>

                <div className="text-topic">2.Add Cascadia font in VS Code</div>

                <div className="text-content">Open VS Code > go to setting > Text Editor > Font > Replace ‘Cascadia Code’, Consolas, ‘Courier New’, monospace  (In Font Family)</div>
            </div>
        </div>
    )
}

export default CssEP1