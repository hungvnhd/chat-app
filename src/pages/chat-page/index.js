import "./style.css";
export let chatPage = /*html*/ ` 


    <div class="chat-title">Rikkei Chat</div>

    <div class="chat-parent">
        <div class="chat-conversations">
            <button class="new-conversation">
                +New Conversation
            </button>



        </div>

        <div class="first-conversation-parent">
            <div class="first-conversation">
                First conversation
            </div>
            <div id="chat-messages">
            <div id="chat-message-text">
            <div id="chat-text">chat content 1</div>
            <img src="https://media.defense.gov/2020/Feb/19/2002251686/700/465/0/200219-A-QY194-002.JPG" id="chat-ava">
            </div>
            <div>chat content2</div>
            <div>chat content3</div>
            <div>chat content4</div>

            </div>
            <div class="chat-input">
                <form action="" id="chat-form">
                    <div style="display:inline"><input type="text" placeholder="Type a message ..."></div>
                    <button>Send</button>
                </form>
            </div>



        </div>

        <div id="chat-information">
            <div>
                <img src="https://media.defense.gov/2020/Feb/19/2002251686/700/465/0/200219-A-QY194-002.JPG" id="chat-ava">
            </div>
            <div id="chat-display-name">Manh hung Nguyen</div>
            <div>
            <label class="custom-file-upload">
                <input type="file" id="photo"/>
                    Set/Change avatar
            </label>
            <button id="submit-img">upload</button>
            </div>

        </div>










       
</div>

    
    







 
`;
