import "./howItWorks.css";

const HowItWorks = () => {
    return (
        <div class="wide_container_RLauto">
                <div class="flexcc how_it_works_container">
                    <h3>How it Works</h3>
                    <div class="flexcc hiw_btns_small_container">
                        <button className="rc_btn" style={{backgroundColor: "#fbdc00", borderColor: "#fbdc00"}}>
                            <span>For Cargo Owners</span>
                        </button>
                        <button class="rc_btn" style={{backgroundColor: "#E5DFDF", borderColor: "#E5DFDF"}}>
                            <span>For Logistics Partners</span>
                        </button>
                    </div>
                    <div>
                        <div class="hiw_stages_container">
                            <div>
                                <div class="hiw_item" style={{marginBottom: "120px"}}>
                                    <p class="hiw_p1">
                                        Stage 1:
                                    </p>
                                    <div class="hiw_item_title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img" style={{listStylePosition: "outside"}}>
                                            <path d="M12.613 7h-1.576" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264"></path>
                                            <path d="M7 12.85a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7Z" stroke-width="0.264" stroke-linejoin="round" stroke-linecap="round" fill="#FBDC00" stroke="#221F1F"></path>
                                            <path d="M9.383 4.371 5.72 5.652a.11.11 0 0 0-.068.068L4.37 9.383a.21.21 0 0 0 .246.246L8.28 8.348a.109.109 0 0 0 .068-.068l1.28-3.663a.21.21 0 0 0-.245-.246Z" fill="#fff" stroke-linecap="round" stroke-linejoin="round" stroke="#221F1F" stroke-width="0.264"></path>
                                            <path d="M7 7.762a.762.762 0 1 0 0-1.524.762.762 0 0 0 0 1.524Z" fill="#221F1F"></path>
                                            <path d="M7 1.387v1.576m0 9.65v-1.576M1.387 7h1.576" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round"stroke-width="0.264"></path>
                                        </svg>
                                        <div style={{paddingLeft: "8px", fontSize: "20px", fontWeight: "600"}}>Discover</div>
                                    </div>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Spot and Contract Rates for Logistics</p>
                                    </span>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Service details, Trade Compliance/ Regulatory Requirements</p>
                                    </span>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Knowledge and Insights on Trade, Logistics, Finance, Supply Chains</p>
                                    </span>
                                </div>
                                <div class="hiw_arrow_left_top">
                                    <img src="./How-It-Works-Section/top-left.webp" alt="line for stages" class="img_hiw_arrow" />
                                </div>
                                <div class="hiw_item">
                                    <p class="hiw_p1">
                                        Stage 2:
                                    </p>
                                    <div class="hiw_item_title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img" style={{listStylePosition: "outside"}}>
                                            <path stroke="#221F1F" fill="#FBDC00" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.374" d="M9.37 1.851c0-.36-.276-.651-.617-.651-.34 0-.617.291-.617.651v1.307c0 .36.276.65.617.65.341.001.618-.29.618-.65V1.851Z"></path>
                                            <g stroke-width="0.374" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round">
                                                <path fill="#FBDC00" d="M9.935 2.2h-5.87c-.515 0-.932.44-.932.981v8.638c0 .542.417.981.932.981h5.87c.515 0 .932-.44.932-.981V3.18c0-.542-.417-.981-.932-.981Z"></path>
                                                <path fill="#FBDC00" d="M5.864 1.851c0-.36-.276-.651-.617-.651-.341 0-.618.291-.618.651v1.307c0 .36.277.65.618.65.34.001.617-.29.617-.65V1.851Z"></path>
                                                <path d="M6.366 5.78h2.908M6.366 8.095h2.908M6.366 10.41h2.908"></path>
                                                <path d="M4.749 6.525c.39 0 .707-.334.707-.745s-.317-.745-.707-.745c-.39 0-.707.334-.707.745s.317.745.707.745Zm0 2.315c.39 0 .707-.334.707-.745s-.317-.745-.707-.745c-.39 0-.707.334-.707.745s.317.745.707.745Zm0 2.314c.39 0 .707-.333.707-.745 0-.411-.317-.744-.707-.744-.39 0-.707.333-.707.744 0 .412.317.745.707.745Z"></path>
                                                <path fill="#fff"></path>
                                                <path></path>
                                            </g>
                                        </svg>
                                        <div style={{paddingLeft: "8px", fontSize: "20px", fontWeight: "600"}}>Plan & Book</div>
                                    </div>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Route, Service Schedules, Inventory, and Cashflow planning</p>
                                    </span>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Book with upfront visibility of service terms and inclusions</p>
                                    </span>
                                </div>
                                <div class="hiw_arrow_left_bottom">
                                    <img src="./How-It-Works-Section/bottom-left.webp" alt="line for stages" class="img_hiw_arrow" />
                                </div>
                            </div>
                            <div class="flexcc big_container">
                                <img src="./How-It-Works-Section/computer.webp" alt="cogoport platform with rate search" class="img_hiw_laptop"/>
                            </div>
                            <div>
                                <div class="hiw_item" style={{marginBottom: "120px"}}>
                                    <p class="hiw_p1">
                                        Stage 3:
                                    </p>
                                    <div class="hiw_item_title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img" style={{listStylePosition: "outside"}}>
                                            <path fill="#FBDC00" d="M12.749 10.698V4.715a.967.967 0 0 0-.967-.967H2.219a.967.967 0 0 0-.968.967v5.983c0 .534.433.968.968.968h9.563a.967.967 0 0 0 .967-.968Z"></path>
                                            <path fill="#231F20" d="M12.895 4.529v6.355a.927.927 0 0 1-.927.927H2.032a.927.927 0 0 1-.927-.927V4.53a.927.927 0 0 1 .927-.927h9.936a.927.927 0 0 1 .927.927ZM1.397 10.884a.636.636 0 0 0 .635.635h9.936a.635.635 0 0 0 .635-.634V4.529a.636.636 0 0 0-.635-.635H2.032a.636.636 0 0 0-.635.635v6.355Z"></path>
                                            <path fill="#231F20" d="M12.749 5.85h-11.5a.145.145 0 0 1-.144-.147.144.144 0 0 1 .145-.145h11.498a.145.145 0 0 1 .144.145.144.144 0 0 1-.143.147Z"></path>
                                            <path fill="#fff" d="M5.396 2.335H3.682v2.388h1.714V2.335Z"></path>
                                            <path fill="#231F20" d="M3.68 2.189h1.715a.144.144 0 0 1 .145.144v2.39a.144.144 0 0 1-.145.144H3.68a.144.144 0 0 1-.144-.145V2.333a.144.144 0 0 1 .144-.144Zm1.57.291H3.827v2.097H5.25V2.48Z"></path>
                                            <path fill="#fff" d="M10.318 2.335H8.604v2.388h1.714V2.335Z"></path>
                                            <path fill="#231F20" d="M8.603 2.189h1.715a.145.145 0 0 1 .145.144v2.39a.144.144 0 0 1-.145.144H8.603a.144.144 0 0 1-.144-.145V2.333a.144.144 0 0 1 .144-.144Zm1.57.291H8.75v2.097h1.423V2.48Z"></path>
                                            <path fill="#fff" d="M4.07 6.675H2.397v1.673h1.674V6.675Z"></path>
                                            <path fill="#231F20" d="M2.396 6.53H4.07a.144.144 0 0 1 .145.144v1.674a.144.144 0 0 1-.145.145H2.396a.144.144 0 0 1-.145-.145V6.674a.144.144 0 0 1 .145-.145Zm1.527.29h-1.38v1.383h1.382L3.923 6.82Z"></path>
                                            <path fill="#fff" d="M6.655 6.675H4.982v1.673h1.673V6.675Z"></path>
                                            <path fill="#231F20" d="M4.981 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.144.144 0 0 1-.144.145H4.98a.144.144 0 0 1-.144-.145V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.38V6.82Z"></path>
                                            <path fill="#fff" d="M9.24 6.675H7.568v1.673h1.674V6.675Z"></path>
                                            <path fill="#231F20" d="M7.566 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.144.144 0 0 1-.144.145H7.566a.144.144 0 0 1-.144-.145V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.38V6.82Z"></path>
                                            <path fill="#fff" d="M11.825 6.675h-1.673v1.673h1.673V6.675Z"></path>
                                            <path fill="#231F20" d="M10.151 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.146.146 0 0 1-.089.134.144.144 0 0 1-.055.01H10.15a.144.144 0 0 1-.144-.144V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.381l-.001-1.382Z"></path>
                                            <path fill="#fff" d="M4.07 9.098H2.397v1.673h1.674V9.098Z"></path>
                                            <path fill="#231F20" d="M2.396 8.953H4.07a.144.144 0 0 1 .145.144v1.675a.144.144 0 0 1-.145.144H2.396a.144.144 0 0 1-.145-.145V9.098a.144.144 0 0 1 .145-.144Zm1.527.291h-1.38v1.382h1.382l-.002-1.382Z"></path>
                                            <path fill="#fff" d="M6.655 9.098H4.982v1.673h1.673V9.098Z"></path>
                                            <path fill="#231F20" d="M4.981 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.144.144 0 0 1-.144.144H4.98a.144.144 0 0 1-.144-.145V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.38V9.244Z"></path>
                                            <path fill="#fff" d="M9.24 9.098H7.568v1.673h1.674V9.098Z"></path>
                                            <path fill="#231F20" d="M7.566 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.144.144 0 0 1-.144.144H7.566a.144.144 0 0 1-.144-.145V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.38V9.244Z"></path>
                                            <path fill="#fff" d="M11.825 9.098h-1.673v1.673h1.673V9.098Z"></path>
                                            <path fill="#231F20" d="M10.151 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.145.145 0 0 1-.144.144H10.15a.144.144 0 0 1-.133-.09.145.145 0 0 1-.011-.055V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.381l-.001-1.382Zm-3.948-.915a.145.145 0 0 1-.135-.09.144.144 0 0 1 .032-.159l1.51-1.508a.145.145 0 0 1 .205 0 .144.144 0 0 1 0 .206L7.835 8.286a.144.144 0 0 1-.104.043Z"></path>
                                            <path fill="#231F20" d="M9.155 8.407a.144.144 0 0 1-.103-.042L7.464 6.778a.144.144 0 0 1 0-.206.144.144 0 0 1 .206 0L9.257 8.16a.144.144 0 0 1-.102.248ZM5.16 10.739a.144.144 0 0 1-.103-.043.144.144 0 0 1 0-.206l1.496-1.495a.144.144 0 0 1 .206 0 .144.144 0 0 1 0 .206l-1.495 1.495a.145.145 0 0 1-.104.043Z"></path>
                                            <path fill="#231F20" d="M6.348 10.61a.142.142 0 0 1-.103-.043L4.879 9.201a.144.144 0 0 1 0-.206.144.144 0 0 1 .207 0l1.365 1.366a.144.144 0 0 1-.103.249Z"></path>
                                        </svg>
                                        <div style={{paddingLeft: "8px", fontSize: "20px", fontWeight: "600"}}>Execute</div>
                                    </div>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Ocean and Air Cargo Tracking</p>
                                    </span>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Documentation and Filings, Handled</p>
                                    </span>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Multi-modal: Smooth coordination and handovers between various service providers and stakeholders</p>
                                    </span>
                                </div>
                                <div class="hiw_arrow_right_top">
                                    <img src="./How-It-Works-Section/top-right.webp" alt="line for stages" class="img_hiw_arrow" />
                                </div>
                                <div class="hiw_item">
                                    <p class="hiw_p1">
                                        Stage 4:
                                    </p>
                                    <div class="hiw_item_title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img" style={{listStylePosition: "outside"}}>
                                            <path fill="#231F20" d="M9.545 10.056a.107.107 0 0 1-.076-.031l-.636-.636a.107.107 0 0 1 0-.15.107.107 0 0 1 .15 0l.636.636a.107.107 0 0 1 0 .15.107.107 0 0 1-.074.031Zm.932-2.403h-.92a.108.108 0 1 1 0-.215h.92a.108.108 0 0 1 0 .215ZM8.738 5.947a.107.107 0 0 1-.075-.032.107.107 0 0 1 0-.15l.488-.487a.107.107 0 0 1 .15 0 .108.108 0 0 1 0 .15l-.489.487a.108.108 0 0 1-.074.032ZM7.032 5.28a.108.108 0 0 1-.107-.107v-1.36a.107.107 0 1 1 .215 0v1.359a.107.107 0 0 1-.107.108Zm-1.647.725a.107.107 0 0 1-.076-.031l-.546-.546a.108.108 0 0 1 0-.15.108.108 0 0 1 .15 0l.546.546a.107.107 0 0 1 0 .15.107.107 0 0 1-.074.031Zm-.767 1.648h-1.45a.108.108 0 1 1 0-.215h1.45a.107.107 0 0 1 0 .215Zm.076 2.337a.108.108 0 0 1-.075-.031.108.108 0 0 1 0-.15l.556-.557a.107.107 0 0 1 .15 0 .107.107 0 0 1 0 .15l-.557.557a.108.108 0 0 1-.074.032Zm2.338 1.108a.108.108 0 0 1-.107-.108v-.918a.107.107 0 0 1 .107-.108.108.108 0 0 1 .108.107v.921a.107.107 0 0 1-.107.105Z" ></path>
                                            <path fill="#FBDC00" d="M7.032 4.074a.92.92 0 1 0 0-1.84.92.92 0 0 0 0 1.84Z"></path>
                                            <path fill="#231F20" d="M7.033 4.183a1.03 1.03 0 0 1-.727-1.755 1.029 1.029 0 0 1 1.755.727 1.03 1.03 0 0 1-1.028 1.028Zm0-1.841a.814.814 0 1 0 0 1.627.814.814 0 0 0 0-1.627Z"></path>
                                            <path fill="#FBDC00" d="M7.025 12.892a.92.92 0 1 0 0-1.841.92.92 0 0 0 0 1.841Z"></path>
                                            <path fill="#231F20" d="M7.025 13a1.03 1.03 0 0 1-.727-1.755 1.03 1.03 0 0 1 1.755.727A1.03 1.03 0 0 1 7.025 13Zm0-1.841a.814.814 0 0 0 0 1.626.814.814 0 0 0 0-1.626Z"></path>
                                            <path fill="#FBDC00" d="M11.535 8.466a.92.92 0 1 0 0-1.841.92.92 0 0 0 0 1.84Z"></path>
                                            <path fill="#231F20" d="M11.535 8.573a1.03 1.03 0 0 1-.726-1.754 1.03 1.03 0 0 1 1.453 0 1.03 1.03 0 0 1 0 1.453 1.03 1.03 0 0 1-.727.301Zm0-1.84a.813.813 0 1 0 .001 1.626.813.813 0 0 0-.001-1.627Z"></path>
                                            <path fill="#FBDC00" d="M2.465 8.466a.92.92 0 1 0 0-1.842.92.92 0 0 0 0 1.842Z"></path>
                                            <path fill="#231F20" d="M2.465 8.573a1.03 1.03 0 0 1-.726-1.754 1.03 1.03 0 0 1 1.452 0 1.03 1.03 0 0 1 0 1.453 1.03 1.03 0 0 1-.726.301Zm0-1.84a.814.814 0 0 0 0 1.625.814.814 0 0 0 0-1.626Z"></path>
                                            <path fill="#fff" d="M4.264 5.466a.69.69 0 1 0 0-1.38.69.69 0 0 0 0 1.38Z"></path>
                                            <path fill="#231F20" d="M4.263 5.574A.796.796 0 0 1 3.7 4.212a.793.793 0 0 1 .87-.174.792.792 0 0 1 .432.433.792.792 0 0 1 0 .61.793.793 0 0 1-.738.493Zm0-1.38a.58.58 0 0 0-.582.582.584.584 0 1 0 .582-.582Z"></path>
                                            <path fill="#fff" d="M10.017 11.082a.69.69 0 1 0 0-1.381.69.69 0 0 0 0 1.381Z"></path>
                                            <path fill="#231F20" d="M10.017 11.187a.792.792 0 0 1-.738-.493.792.792 0 0 1 0-.61.793.793 0 0 1 .738-.492.8.8 0 0 1 .564.232.8.8 0 0 1-.564 1.363Zm0-1.38a.581.581 0 1 0 0 1.165.58.58 0 1 0 0-1.163v-.002Z"></path>
                                            <path fill="#fff" d="M9.802 5.466a.69.69 0 1 0 0-1.38.69.69 0 0 0 0 1.38Z"></path>
                                            <path fill="#231F20" d="M9.802 5.574a.796.796 0 0 1-.738-1.103.793.793 0 0 1 .432-.433.792.792 0 0 1 .611 0 .791.791 0 0 1 .432.433.792.792 0 0 1 0 .61.793.793 0 0 1-.432.433c-.097.04-.2.06-.305.06Zm0-1.38a.58.58 0 0 0-.583.582.58.58 0 0 0 .583.583.583.583 0 0 0 0-1.165Z"></path>
                                            <path fill="#fff" d="M4.217 11.052a.69.69 0 1 0 0-1.382.69.69 0 0 0 0 1.382Z"></path>
                                            <path fill="#231F20" d="M4.217 11.159a.79.79 0 0 1-.564-.234.793.793 0 0 1-.174-.87.8.8 0 0 1 1.476.611.793.793 0 0 1-.432.433.802.802 0 0 1-.306.06Zm0-1.38a.582.582 0 1 0-.001 1.163.582.582 0 0 0 .001-1.164Z"></path>
                                            <path fill="#fff" d="M7.01 9.978a2.393 2.393 0 1 0 0-4.786 2.393 2.393 0 0 0 0 4.786Z"></path>
                                            <path fill="#231F20" d="M7.01 10.084a2.503 2.503 0 0 1-2.5-2.5 2.503 2.503 0 0 1 2.5-2.5 2.504 2.504 0 0 1 2.5 2.5 2.503 2.503 0 0 1-2.5 2.5Zm0-4.786a2.288 2.288 0 0 0-2.285 2.285A2.288 2.288 0 0 0 7.011 9.87a2.288 2.288 0 0 0 2.285-2.285A2.288 2.288 0 0 0 7.011 5.3v-.002Z"></path>
                                            <path fill="#FFF2EE" d="M7.96 7.155h-.357v1.256h.357V7.156Z"></path>
                                            <path fill="#231F20" d="M8.068 8.519h-.573V7.048h.573v1.471Zm-.357-.216h.141v-1.04h-.141v1.04Z"></path>
                                            <path fill="#FFF2EE" d="M7.172 7.155h-.357v1.256h.357V7.156Z"></path>
                                            <path fill="#231F20" d="M7.28 8.519h-.57V7.048h.572L7.28 8.519Zm-.357-.216h.141v-1.04h-.141v1.04Z"></path>
                                            <path fill="#FFF2EE" d="M6.385 7.155h-.357v1.256h.357V7.156Z"></path>
                                            <path fill="#231F20" d="M6.492 8.519H5.92V7.048h.572v1.471Zm-.357-.216h.142v-1.04h-.142v1.04Z"></path>
                                            <path fill="#FFF2EE" d="M6.968 5.829a.05.05 0 0 1 .05 0c.205.131 1.564 1.005 1.527.994-.036-.012-2.837 0-3.087 0-.001 0-.002 0-.003-.002a.006.006 0 0 1-.002-.006l.002-.003 1.513-.983Z"></path>
                                            <path fill="#231F20" d="m8.605 6.953-.08-.025c-.144-.006-1.63-.004-3.066 0h-.08l-.05-.157.069-.05 1.514-.984a.155.155 0 0 1 .168 0c.1.066.484.311.842.542.37.24.562.365.657.439h.002c.1.078.088.1.066.147l-.042.088ZM6.995 5.94l-1.188.773a337.38 337.38 0 0 1 2.379-.003c-.257-.168-.67-.434-1.191-.77Z"></path>
                                            <path fill="#020202" d="M6.994 6.588a.203.203 0 1 0 0-.407.203.203 0 0 0 0 .407Z"></path>
                                            <path fill="#FFF2EE" d="M8.283 6.822H5.706v.333h2.577v-.333Z"></path>
                                            <path fill="#231F20" d="M8.39 7.263H5.599v-.55h2.793v.55Zm-2.576-.215h2.361v-.119H5.814v.119Z"></path>
                                            <path fill="#FFF2EE" d="M8.283 8.411H5.706v.407h2.577V8.41Z"></path>
                                            <path fill="#231F20" d="M8.39 8.925H5.599v-.622h2.793v.622Zm-2.576-.216h2.361v-.19H5.814v.19Z"></path>
                                        </svg>
                                        <div style={{paddingLeft: "8px", fontSize: "20px", fontWeight: "600"}}>Finance</div>
                                    </div>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Deferred payment on Logistics with PayLater</p>
                                    </span>
                                    <span style={{display: "flex"}}>
                                        <div style={{fontSize:"20px"}}>•</div>
                                        <p class="hiw_p2">Trade Finance for your Cargo with Export Factoring</p>
                                    </span>
                                </div>
                                <div class="hiw_arrow_right_bottom">
                                    <img src="./How-It-Works-Section/bottom-right.webp" alt="line for stages" class="img_hiw_arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HowItWorks;

