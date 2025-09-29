FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["FlappyBird/FlappyBird/FlappyBird.csproj", "FlappyBird/FlappyBird/"]
COPY ["FlappyBird/FlappyBird.Client/FlappyBird.Client.csproj", "FlappyBird/FlappyBird.Client/"]
RUN dotnet restore "FlappyBird/FlappyBird/FlappyBird.csproj"
COPY . .
WORKDIR "/src/FlappyBird/FlappyBird"
RUN dotnet build "./FlappyBird.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./FlappyBird.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FlappyBird.dll"]
