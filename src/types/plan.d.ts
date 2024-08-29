export interface SubscribedPlan {
  price: number;
  originalPrice: number;
  level: string;
  type: string;
  name: string;
  badge?: string;
  memberCap: number;
  profileCap: number;
  teamCap: number;
  planId: string;
  createdAt: string;
  updatedAt: string;
  dailyOpenCap: number;
  dailyOpenUnit: number;
  memberUnit: number;
  hot: boolean;
  dailyOpenOnceUnit: number;
  purchasable: boolean;
  presell: boolean;
  periodNum: number;
  periodUnit: string;
  periods?: string[];
  metadata?: {
    bonus: number;
    rebate: number;
    overage: number;
    deferment: number;
  };
}
