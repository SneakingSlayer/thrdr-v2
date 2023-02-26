/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface ThreadUserProps {
  id: string;
  userName: string;
  avatar: string | null;
}

export interface ThreadProps {
  _id: string;
  createdBy: ThreadUserProps;
  createdFor: ThreadUserProps;
  title: string;
  description: string;
  status: string;
  isAnonymous: boolean;
  isLocked: boolean;
  createdAt: string;
  updatedAt: string;
}
