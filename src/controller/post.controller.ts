import { myDataSource } from "../config/app-data-source";
import { Post } from '../entity/post';

export class PostService {
    private postRepository = myDataSource.getRepository(Post);

    async getAllPosts(): Promise<Post[]> {
        return this.postRepository.find();
    }

    async getPostById(id: string): Promise<Post | undefined> {
        return this.postRepository.findOne({ where: { id } });
    }

    async createPost(postData: Partial<Post>): Promise<Post> {
        const post = this.postRepository.create(postData);
        return this.postRepository.save(post);
    }

    async updatePost(id: string, postData: Partial<Post>): Promise<Post | undefined> {
        await this.postRepository.update(id, postData);
        return this.getPostById(id);
    }

    async deletePost(id: string): Promise<void> {
        await this.postRepository.delete(id);
    }
}
