
/**
 * User model
 */
export interface User {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
}