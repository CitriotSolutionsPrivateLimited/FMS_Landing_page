import { Flex, Text } from "@chakra-ui/react";
import React, { useState,useEffect, useRef } from "react";
import { Divider,Avatar, Input, Button, } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = ({ loading, inputMessage, setInputMessage, handleSendMessage }) => {
  return (
    <Flex w="100%" mt="5" className=" mb-5">
      <Input.TextArea
        className='py-1'
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onPressEnter={handleSendMessage}
        disabled={loading}
        placeholder="Ask your message like...
        Show me data of Employees?,
        Show me which camera is Off"
        autoSize={{ minRows: 1, maxRows: 4 }}
      />
      <Button
        className='py-1 ml-2 bg-[#8C68CD] hover:bg-[#8C68CD]'
        type="primary"
        onClick={handleSendMessage}
        loading={loading}
      >
        Send
      </Button>
    </Flex>
  );
};

const Messages = ({ messages, auth, loading }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <div>
      
      <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
        {/* Render messages */}
        {messages.map((item, index) => (
          <Flex key={index} className="my-4">
            {item.from === "me" ? (
              <Avatar className='bg-purple-500 mr-5'>{auth && auth.user ? (auth.user[0].toUpperCase()) : 'U'}</Avatar>
            ) : (
              <Avatar src={"/logo3.png"} className="mr-5" />
            )}
            <Flex minW="100px" maxW="350px" my="1" p="3">
              <Text>{item.text}</Text>
            </Flex>
          </Flex>
        ))}
        {/* Show typing indicator when loading */}
        {loading && (
          <Flex className="my-4">
            <div className="bg-gray-300 w-10 h-10 rounded-full animate-pulse mr-5"></div>
            <Flex minW="100px" maxW="350px" my="1" p="3">
              <Text>Typing...</Text>
            </Flex>
          </Flex>
        )}
        <AlwaysScrollToBottom />
      </Flex>
    </div>
  );
};

const SupportPage = ({auth}) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    
  };

  return (
    <div className=' p-3 w-full flex items-center justify-center mt-32'   >
      <Flex w={["100%", "100%", "60%"]} flexDir="column">
      <div className=' justify-center items-center flex'>
        <h2 className='text-[#8C68CD] text-3xl font-bold font-Ubuntu tracking-wider '>
        Vizonai Chatbot
        </h2>
      </div>
        <Messages messages={messages} auth={auth} loading={loading} />
        <Divider />
        <Footer
          loading={loading}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </div>
  );
};

export default SupportPage;
