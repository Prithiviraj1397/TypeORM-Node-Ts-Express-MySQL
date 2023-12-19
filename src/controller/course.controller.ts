import { myDataSource } from "../config/app-data-source";
import { Course } from '../entity/course';

export class CourseService {
    private courseRepository = myDataSource.getRepository(Course);

    async getAllCourses(): Promise<Course[]> {
        return this.courseRepository.find();
    }

    async getCourseById(id: string): Promise<Course | undefined> {
        return this.courseRepository.findOne({ where: { id } });
    }

    async createCourse(courseData: Partial<Course>): Promise<Course> {
        const post = this.courseRepository.create(courseData);
        return this.courseRepository.save(post);
    }

    async updateCourse(id: string, courseData: Partial<Course>): Promise<Course | undefined> {
        await this.courseRepository.update(id, courseData);
        return this.getCourseById(id);
    }

    async deleteCourse(id: string): Promise<void> {
        await this.courseRepository.delete(id);
    }
}
