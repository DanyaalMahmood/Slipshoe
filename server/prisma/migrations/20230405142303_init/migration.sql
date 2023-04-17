-- CreateTable
CREATE TABLE "Shoes" (
    "id" SERIAL NOT NULL,
    "arrivaldate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Shoes_pkey" PRIMARY KEY ("id")
);
