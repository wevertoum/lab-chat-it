"use client";
import ChatExamples from "@/components/ChatExamples";
import InputChat from "@/components/InputChat";
import PageContainer from "@/components/PageContainer";

export default function Chat() {
  const handleSubmit = (message: string) => {
    console.log("Form submitted with message:", message);
  };

  const firstConversation = false;

  return (
    <PageContainer
      title="Health"
      showMenu
      footer={
        <div className="mx-auto mb-[30px] mt-4 w-[346px] sm:w-[60%] lg:w-[40%]">
          <InputChat placeholder="Send a message." onSubmit={handleSubmit} />
        </div>
      }
    >
      {firstConversation ? <ChatExamples /> : <>conversa em andamento</>}
    </PageContainer>
  );
}
