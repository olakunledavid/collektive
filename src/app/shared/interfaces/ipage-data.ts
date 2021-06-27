export interface IPageData {
  currentPage: string;
  pages: IPages;
}
export interface IPages {
  initiateProject: string;
  explore: string;
  library: string;
  projectWall: string;
}
export interface IProject {
  title: string;
  createdDate: Date;
  collaborators?: ICollaborators[];
  owner?: string;
  tags?: string[];
  text?: string;
}

export interface ICollaborators {
  name: string;
  requestDate: Date;
  approvalDate?: Date;
}

export interface INotification {
  joinRequest?: IRequest[];
  followRequest?: IRequest[];
}

export interface IRequest {
  name: string;
  requestDate: Date;
  projectName?: string;
}
export interface IChat {
  messages?: IMessage[];
  with: string;
}
export interface IMessage {
  text: string;
  from: string;
  to: string;
  img: string;
  samePosition?: boolean;
}
