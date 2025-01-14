import { Conversation } from './chat';
import { ChatModeKey } from './chatmode';
import { FolderInterface } from './folder';
import { Prompt } from './prompt';

// keep track of local storage schema
export interface LocalStorage {
  apiKey: string;
  conversationHistory: Conversation[];
  selectedConversation: Conversation;
  theme: 'light' | 'dark';
  language:
    | 'ar'
    | 'bn'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'he'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'si'
    | 'sv'
    | 'te'
    | 'vi'
    | 'zh';
  // added folders (3/23/23)
  folders: FolderInterface[];
  // added prompts (3/26/23)
  prompts: Prompt[];
  // added showChatbar and showPromptbar (3/26/23)
  showChatbar: boolean;
  showPromptbar: boolean;
  // added plugin keys (4/3/23)
  pluginKeys: ChatModeKey[];
}
