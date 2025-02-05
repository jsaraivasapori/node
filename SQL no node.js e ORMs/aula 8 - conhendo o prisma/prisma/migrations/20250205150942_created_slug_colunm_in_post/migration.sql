/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "slug" VARCHAR(255) NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "content" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
